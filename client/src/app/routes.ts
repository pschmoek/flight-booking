import { Routes } from '@angular/router';

import { OverviewComponent } from './components/overview/overview.component';
import { CodesComponent } from './components/codes/codes.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingComponent } from './components/booking/booking.component';

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
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'booking/:flight',
    component: BookingComponent
  }
];
