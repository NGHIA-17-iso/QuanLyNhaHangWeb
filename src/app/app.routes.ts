import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register'; // Nhớ check đúng tên file register.ts của bạn

import { AdminLayout } from './layouts/admin-layout/admin-layout';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // THÊM DÒNG NÀY: Khai báo định tuyến trang đăng ký
  {
    path: 'admin',
    component: AdminLayout,
    children: [

      {
        path: 'user-management',
        loadComponent: () =>
          import('./features/auth/admin/user-management/user-management')
          .then(m => m.UserManagement)
      },

      {
        path: 'create-employee',
        loadComponent: () =>
          import('./features/auth/admin/user-management/create/create')
            .then(m => m.Create)
      },

      {
        path: '',
        redirectTo: 'user-management',
        pathMatch: 'full'
      }

    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: '**', redirectTo: '/login' }
];