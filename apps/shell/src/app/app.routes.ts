import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'department',
        loadChildren: () =>
          loadRemoteModule('department', './Module').then((m) => m.AppModule),
      },
    ],
  },
];
