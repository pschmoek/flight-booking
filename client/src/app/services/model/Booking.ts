import { Flight } from './Flight';
import { Passenger } from './Passenger';

export interface Booking {
  id: string;
  price: number;
  currency: string;
  flight: Flight;
  passenger: Passenger;
}
