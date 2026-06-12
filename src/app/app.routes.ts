import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login/login';

import { RegisterComponent } from './features/auth/register/register';

import { AdminLayout } from './layouts/admin-layout/admin-layout';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

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
        path: '',
        redirectTo: 'user-management',
        pathMatch: 'full'
      },

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
        path: 'create-table',
        loadComponent: () =>
          import('./features/auth/admin/user-management/table-management/create-table/create-table')
            .then(m => m.CreateTable)
      },

      {
        path: 'edit-table/:id',
        loadComponent: () =>
          import('./features/auth/admin/user-management/table-management/edit-table/edit-table')
            .then(m => m.EditTable)
      },

      {
        path: 'food-management',
        loadComponent: () =>
          import('./features/auth/admin/user-management/food-management/food-management')
            .then(m => m.FoodManagement)
      },

      {
        path: 'create-food',
        loadComponent: () =>
          import('./features/auth/admin/user-management/food-management/create-food/create-food')
            .then(m => m.CreateFood)
      },

      {
        path: 'edit-food/:id',
        loadComponent: () =>
          import('./features/auth/admin/user-management/food-management/edit-food/edit-food')
            .then(m => m.EditFood)
      },

      {
        path: 'revenue',
        loadComponent: () =>
          import('./features/auth/admin/user-management/revenue/revenue')
            .then(m => m.Revenue)
      }

    ]
  },

  {
    path: '**',
    redirectTo: '/login'
  }

];