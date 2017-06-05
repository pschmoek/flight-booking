import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule,
  MdButtonModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdGridListModule,
  MdInputModule
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
import { SpinnerComponent } from './components/codes/spinner.component';
import { CodeGridComponent } from './components/codes/code-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CodesComponent,
    OverviewComponent,
    DepartureTimePipe,
    SpinnerComponent,
    CodeGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdInputModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CodeEffects),
    ReactiveFormsModule
  ],
  providers: [CodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
