import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Code } from '../../models/code';

@Component({
  selector: 'app-code-grid',
  template: `
<md-grid-list  cols="6" rowHeight="40px">

  <md-grid-tile class="header"><div></div></md-grid-tile>
  <md-grid-tile class="header"><div>Code</div></md-grid-tile>
  <md-grid-tile class="header"><div>From</div></md-grid-tile>
  <md-grid-tile class="header"><div>To</div></md-grid-tile>
  <md-grid-tile class="header"><div>Airline</div></md-grid-tile>
  <md-grid-tile class="header"><div>Departure</div></md-grid-tile>

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

  <md-grid-tile rowspan="2">
    <button md-icon-button (click)="emitAddCode()">
      <i class="material-icons">add</i>
    </button>
  </md-grid-tile>
  <md-grid-tile rowspan="2">
    <div>
      <md-input-container>
        <input (keyup.enter)="emitAddCode()" mdInput placeholder="Code">
      </md-input-container>
    </div>
  </md-grid-tile>
  <md-grid-tile rowspan="2">
    <div>
      <md-input-container>
        <input (keyup.enter)="emitAddCode()" mdInput placeholder="From">
      </md-input-container>
    </div>
  </md-grid-tile>
  <md-grid-tile rowspan="2">
    <div>
      <md-input-container>
        <input (keyup.enter)="emitAddCode()" mdInput placeholder="To">
      </md-input-container>
    </div>
  </md-grid-tile>
  <md-grid-tile rowspan="2">
    <div>
      <md-input-container>
        <input (keyup.enter)="emitAddCode()" mdInput placeholder="Airline">
      </md-input-container>
    </div>
  </md-grid-tile>
  <md-grid-tile rowspan="2">
    <div>
      <md-input-container>
        <input (keyup.enter)="emitAddCode()" mdInput placeholder="Departure">
      </md-input-container>
    </div>
  </md-grid-tile>
</md-grid-list>
  `,
  styles: [`
md-grid-tile {
  font-size: 18px;
  font-family: Roboto,"Helvetica Neue",sans-serif;
}
md-grid-tile.header {
  font-weight: bold;
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
  @Output() addNewCode = new EventEmitter<Code>();

  emitAddCode() {
    this.addNewCode.emit(null);
  }
}
