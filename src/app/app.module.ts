import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HarrypotterModule } from './harrypotter/harrypotter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HarrypotterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
