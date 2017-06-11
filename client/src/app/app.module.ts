import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule,
  MdButtonModule,
  MdProgressSpinnerModule,
  MdInputModule,
  MdDialogModule,
  MdCardModule,
  MdIconModule,
  MdSnackBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
import { DialogEffects } from './effects/dialog';
import { TransformTimeService } from './services/transform-time.service';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightEffects } from './effects/flight';
import { FlightTableComponent } from './components/flights/flight-table.component';
import { SearchFlightsFormComponent } from './components/flights/search-flights-form.component';
import { FlightService } from './services/flight.service';
import { BookingComponent } from './components/booking/booking.component';
import { BookingService } from './services/booking.service';
import { BookingEffects } from './effects/booking';
import { FlightOverviewComponent } from './components/booking/flight-overview.component';
import { PassengersTableComponent } from './components/booking/passengers-table.component';
import { AddBookingDialogComponent } from './components/add-booking-dialog/add-booking-dialog.component';
import { MessageEffects } from './effects/message';

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
    SearchFlightsFormComponent,
    BookingComponent,
    FlightOverviewComponent,
    PassengersTableComponent,
    AddBookingDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    MdToolbarModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdInputModule,
    MdDialogModule,
    MdCardModule,
    MdIconModule,
    MdSnackBarModule,
    NgxDatatableModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CodeEffects),
    EffectsModule.run(DialogEffects),
    EffectsModule.run(FlightEffects),
    EffectsModule.run(BookingEffects),
    EffectsModule.run(MessageEffects)
  ],
  providers: [
    CodeService,
    TransformTimeService,
    FlightService,
    BookingService
  ],
  entryComponents: [
    AddCodeDialogComponent,
    AddBookingDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
