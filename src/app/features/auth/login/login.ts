import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { AuthResponse } from '../../../core/models/auth.model';
import { finalize } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    // Tên các thuộc tính trong group viết thường để đồng bộ với HTML
    this.loginForm = this.fb.group({
      identifer: ['', [Validators.required]],
      matKhau: ['', [Validators.required, Validators.minLength(6)]]
    });

    $(document).ready(function() {
      $('.auth-card').hide().fadeIn(800);
    });
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(
      this.loginForm.value.identifer,
      this.loginForm.value.matKhau
    )
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe({

      next: (res: AuthResponse) => {

        console.log('Response API:', res);
        console.log('Role API:', res.role);

        if (!res.isSuccess) {
          this.errorMessage = res.message;
          return;
        }

        alert('Đăng nhập thành công');

        if (
          res.role === 'Admin' ||
          res.role === 'Quản lý'
        ) {

          this.router.navigate(
            ['/admin/user-management']
          );

        }
        else if (
          res.role === 'Nhà bếp' ||
          res.role === 'Phục vụ'
        ) {

          this.router.navigateByUrl('/staff');

        }
        else {

          this.router.navigateByUrl('/customer');

        }

      },

      error: (err) => {

        console.log('LOGIN ERROR:', err);

        this.errorMessage =
          err?.error?.message ||
          'Không kết nối được máy chủ';

      }

    });

  }
}
