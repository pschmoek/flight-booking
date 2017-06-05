import { Routes } from '@angular/router';

import { OverviewComponent } from './components/overview/overview.component';
import { CodesComponent } from './components/codes/codes.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'codes',
    component: CodesComponent
  }
]