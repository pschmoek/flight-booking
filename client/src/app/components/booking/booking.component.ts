import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  template: `
  <div>
    <h2>Booking {{flightId}}</h2>
  </div>
  `
})
export class BookingComponent implements OnInit {
  flightId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.flightId = p.flight);
  }
}
