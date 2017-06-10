import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule,
  MdButtonModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdGridListModule,
  MdInputModule,
  MdDialogModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { CodesComponent } from './components/codes/codes.component';
import { OverviewComponent } from './components/overview/overview.component';
import { reducer } from './reducers';
import { CodeService } from './services/code.service';
import { CodeEffects } from './effects/code';
import { DepartureTimePipe } from './pipes/departure-time.pipe';
import { SpinnerComponent } from './components/shared/spinner.component';
import { CodeGridComponent } from './components/codes/code-grid.component';
import { AddCodeDialogComponent } from './components/add-code-dialog/add-code-dialog.component';
import { CodeDialogEffects } from './effects/code-dialog';
import { TransformTimeService } from './services/transform-time.service';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightEffects } from './effects/flight';
import { FlightTableComponent } from './components/flights/flight-table.component';
import { SearchFlightsFormComponent } from './components/flights/search-flights-form.component';
import { FlightService } from './services/flight.service';

@NgModule({
  declarations: [
    AppComponent,
    CodesComponent,
    OverviewComponent,
    DepartureTimePipe,
    SpinnerComponent,
    CodeGridComponent,
    AddCodeDialogComponent,
    FlightsComponent,
    FlightTableComponent,
    SearchFlightsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdInputModule,
    MdDialogModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CodeEffects),
    EffectsModule.run(CodeDialogEffects),
    EffectsModule.run(FlightEffects)
  ],
  providers: [CodeService, TransformTimeService, FlightService],
  entryComponents: [
    AddCodeDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
