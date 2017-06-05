import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Code } from '../../models/code';

@Component({
  selector: 'app-code-grid',
  template: `
  <md-grid-list  cols="6" rowHeight="40px">
  
    <md-grid-tile class="header"><div class="header"></div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">Code</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">From</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">To</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">Airline</div></md-grid-tile>
    <md-grid-tile class="header"><div class="header">Departure</div></md-grid-tile>

    <ng-container *ngFor="let code of codes">
      <md-grid-tile>
        <button md-icon-button (click)="deleteCode.emit(code)">
          <i class="material-icons">delete</i>
        </button>
      </md-grid-tile>
      <md-grid-tile><div>{{code.code}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.from}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.to}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.airline}}</div></md-grid-tile>
      <md-grid-tile><div>{{code.time | departureTime}}</div></md-grid-tile>
    </ng-container>

  </md-grid-list>
  `,
  styles: [`
md-grid-tile {
  font-size: 18px;
  font-family: Roboto,"Helvetica Neue",sans-serif;
}
md-grid-tile.header {
  font-weight: bold;
  height: 28px;
}
md-grid-tile div {
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;  
}
  `]
})
export class CodeGridComponent {
  @Input() codes: Code[];
  @Output() deleteCode = new EventEmitter<Code>();
}
