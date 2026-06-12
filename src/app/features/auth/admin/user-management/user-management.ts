import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement implements OnInit {

  Users: any[] = [];

  constructor(
    private Http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.LoadUsers();

  }

  LoadUsers() {

    this.Http.get<any[]>(
      'https://localhost:7043/api/UserManagement'
    ).subscribe({

      next: (data) => {

        this.Users = [...data];

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  ToggleStatus(user: any) {

    this.Http.put(
      `https://localhost:7043/api/UserManagement/${user.maNguoiDung}/status`,
      {
        trangThaiHoatDong: !user.trangThaiHoatDong
      }
    )
    .subscribe({

      next: () => {

        user.trangThaiHoatDong =
          !user.trangThaiHoatDong;

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.log(err);

        alert('Không thể cập nhật trạng thái');

      }

    });

  }

}