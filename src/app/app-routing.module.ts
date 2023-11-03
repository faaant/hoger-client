import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { AuthGuard } from '@core/guards/auth/auth.guard';
import { RoleGuard } from '@core/guards/role/role.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@features/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
      {
        path: 'room-managment',
        loadChildren: () =>
          import('@features/room-managment/room-managment.module').then(
            (module) => module.RoomManagmentModule
          ),
        canLoad: [RoleGuard],
        data: { roles: ['Admin', 'Receptionist'] },
      },
      {
        path: 'cleaner-tasks',
        loadChildren: () =>
          import('@features/cleaner-tasks/cleaner-tasks.module').then(
            (module) => module.CleanerTasksModule
          ),
        canLoad: [RoleGuard],
        data: { roles: ['Admin', 'Cleaner'] },
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('@features/accounts/accounts.module').then(
            (module) => module.AccountsModule
          ),
        canLoad: [RoleGuard],
        data: { roles: ['Admin'] },
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('@features/statistics/statistics.module').then(
            (module) => module.StatisticsModule
          ),
        canLoad: [RoleGuard],
        data: { roles: ['Admin'] },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@features/admin-dashboard/admin-dashboard.module').then(
            (module) => module.AdminDashboardModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
