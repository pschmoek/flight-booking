import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MdSnackBar } from '@angular/material';

import * as code from './actions/code';
import * as fromRoot from './reducers';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  template: `
<md-toolbar color="primary">
  <a md-button [routerLink]="['/codes']">Codes</a>
  <a md-button [routerLink]="['/flights']">Flights</a>
</md-toolbar>
<router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>, private snackBar: MdSnackBar,
    private updateService: UpdateService) {
    this.store.select(fromRoot.getMessageState).subscribe(s => {
      if (s.isVisible) {
        this.snackBar.open(s.message);
      } else {
        this.snackBar.dismiss();
      }
    });

    this.updateService.getUpdates().subscribe(u => console.log(u));
  }
}
