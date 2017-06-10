import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
  <div>
    <md-progress-spinner mode="indeterminate"></md-progress-spinner>
    <span>{{text}}</span>
  </div>
  `, styles: [`
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-size: 18px;
  font-family: Roboto,"Helvetica Neue",sans-serif;
}
  `]
})
export class SpinnerComponent {
  @Input() text;
}
