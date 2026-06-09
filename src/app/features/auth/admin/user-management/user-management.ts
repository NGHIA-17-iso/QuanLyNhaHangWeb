import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement implements OnInit {

  Users: any[] = [];

  NewUser = {
    hoTen: '',
    email: '',
    dienThoai: '',
    matKhau: '',
    maVaiTro: 2
  };

  constructor(private Http: HttpClient) {}

  ngOnInit(): void {
    this.LoadUsers();
  }

  LoadUsers() {
    this.Http.get<any[]>(
      'https://localhost:7043/api/UserManagement'
    ).subscribe({
      next: (data) => {
        this.Users = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  AddEmployee() {
    this.Http.post(
      'https://localhost:7043/api/UserManagement',
      this.NewUser
    ).subscribe({
      next: () => {
        alert('Thêm nhân viên thành công');

        this.NewUser = {
          hoTen: '',
          email: '',
          dienThoai: '',
          matKhau: '',
          maVaiTro: 2
        };

        this.LoadUsers();
      },
      error: (err) => {
        console.log(err);
        alert(JSON.stringify(err));
      }
    });
  }

  ChangeRole(user: any) {

    this.Http.put(
      `https://localhost:7043/api/UserManagement/${user.maNguoiDung}/role`,
      {
        maVaiTro: user.maVaiTro
      }
    ).subscribe({
      next: () => {
        alert('Cập nhật vai trò thành công');
      }
    });
  }

  ToggleStatus(user: any) {

    this.Http.put(
      `https://localhost:7043/api/UserManagement/${user.maNguoiDung}/status`,
      {
        trangThaiHoatDong: !user.trangThaiHoatDong
      }
    ).subscribe({
      next: () => {
        user.trangThaiHoatDong = !user.trangThaiHoatDong;
      }
    });
  }
}