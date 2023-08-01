import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelessPickerModule } from 'timeless-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimelessPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
