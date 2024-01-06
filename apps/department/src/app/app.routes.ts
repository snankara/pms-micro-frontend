import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
        import('./components/list/list.component').then((m) => m.ListComponent),  
      }
    ]
  },
];
