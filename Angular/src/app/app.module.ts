import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ng-model ( two-way binding and forms ).

import { AppComponent } from './app.component';
import { OneWayBindingComponent } from './onewaybinding/onewaybinding.component';
import { TwoWayBindingComponent } from './twowaybinding/twowaybinding.component';
import { SimpleRepeaterComponent } from './simplerepeater/simplerepeater.component';
import { MasterDetailSimpleComponent } from './masterdetailsimple/masterdetailsimple.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    SimpleRepeaterComponent,
    MasterDetailSimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
