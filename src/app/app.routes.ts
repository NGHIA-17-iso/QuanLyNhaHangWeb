import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

import { Revenue } from './features/auth/admin/user-management/revenue/revenue';
import { Create } from './features/auth/admin/user-management/create/create';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

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
        component: Create
      },

      {
        path: 'edit-employee/:id',
        loadComponent: () =>
          import('./features/auth/admin/user-management/edit-employee/edit-employee')
            .then(m => m.EditEmployee)
      },

      {
        path: 'table-management',
        loadComponent: () =>
          import('./features/auth/admin/user-management/table-management/table-management')
            .then(m => m.TableManagement)
      },

      {
        path: 'food-management',
        loadComponent: () =>
          import('./features/auth/admin/user-management/food-management/food-management')
            .then(m => m.FoodManagement)
      },

      {
        path: 'revenue',
        component: Revenue
      },

      {
        path: '',
        redirectTo: 'user-management',
        pathMatch: 'full'
      }

    ]
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/login'
  }

];
