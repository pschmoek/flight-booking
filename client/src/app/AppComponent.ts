import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<md-sidenav-container>
  <md-sidenav mode="side" opened="true">
    <!-- sidenav content -->
    sidenav
  </md-sidenav>

  <h1>Hello</h1>
  <!-- primary content -->
</md-sidenav-container>
  `,
  styles: [`

  `]
})
export class AppComponent {}
