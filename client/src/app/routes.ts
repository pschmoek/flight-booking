import { Routes } from '@angular/router';

import { OverviewComponent } from './components/overview.component';
import { CodesComponent } from './components/codes.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'codes',
    component: CodesComponent
  }
]