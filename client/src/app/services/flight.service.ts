import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Flight } from '../models/flight';
import { FlightSearchParams } from '../models/flight-search-params';

@Injectable()
export class FlightService {
  private readonly baseUrl = '/api/flights';

  constructor(private http: Http) { }

  getFlightById(id: string): Observable<Flight> {
    return this.http.get(`${this.baseUrl}/${id}`).map(r => r.json());
  }

  searchFlights(params: FlightSearchParams): Observable<Flight[]> {
    const urlSearchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      if (params[key]) {
        urlSearchParams.set(key, params[key]);
      }
    }

    return this.http.get(this.baseUrl, { search: urlSearchParams }).map(r => r.json());
  }
}
