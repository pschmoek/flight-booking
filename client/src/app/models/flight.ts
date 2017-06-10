import { Booking } from './booking';

export interface Flight {
  id?: string;
  code: string;
  from: string;
  to: string;
  departure: string;
  airline: string;
  aircraft: string;
  bookings?: Booking[];
}
