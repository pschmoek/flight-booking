import { Routes } from '@angular/router';

import { CodesComponent } from './components/codes/codes.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'codes'
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
    path: 'bookings/:flight',
    component: BookingComponent
  }
];
