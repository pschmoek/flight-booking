import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Code } from '../../models/code';

@Component({
  selector: 'app-code-grid',
  template: `
<ngx-datatable class="material"
  style="margin-top: 10px"
  [rows]="codes"
  [columnMode]="'force'"
  [headerHeight]="40"
  [rowHeight]="60"
  [footerHeight]="40">
  <ngx-datatable-column [width]="70" [minWidth]="70" [maxWidth]="70" name="">
    <ng-template let-row="row" ngx-datatable-cell-template>
      <button md-icon-button (click)="deleteCode.emit(row)">
        <md-icon style="font-size: 20px">delete</md-icon>
      </button>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column prop="code"></ngx-datatable-column>
  <ngx-datatable-column prop="from"></ngx-datatable-column>
  <ngx-datatable-column prop="to"></ngx-datatable-column>
  <ngx-datatable-column prop="airline"></ngx-datatable-column>
  <ngx-datatable-column prop="time">
    <ng-template let-value="value" ngx-datatable-cell-template>
      <span>{{value | departureTime}}</span>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-footer>
    <ng-template ngx-datatable-footer-template>
      <button style="width: 100%; height: 100%" md-button (click)="addNewCodeClick.emit()">
          Add New Code
      </button>
    </ng-template>
  </ngx-datatable-footer>
</ngx-datatable>
  `,
  styles: [`
:host /deep/ span {
  line-height: 40px;
}
  `]
})
export class CodeGridComponent {
  @Input() codes: Code[];
  @Output() deleteCode = new EventEmitter<Code>();
  @Output() addNewCodeClick = new EventEmitter();
}
