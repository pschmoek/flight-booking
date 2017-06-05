import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as code from './actions/code';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  template: `
<md-toolbar color="primary">
  <a md-button [routerLink]="['/']">Overview</a>
  <a md-button [routerLink]="['/codes']">Codes</a>
  <a md-button [routerLink]="['/flights']">Flights</a>
</md-toolbar>
<router-outlet></router-outlet>
  `
})
export class AppComponent { }
