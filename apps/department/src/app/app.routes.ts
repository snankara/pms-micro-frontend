import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./components/list/list.component').then((m) => m.ListComponent),
  },
];
