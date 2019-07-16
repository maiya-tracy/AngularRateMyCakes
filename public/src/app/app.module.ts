import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RateMyCakesComponent } from './rate-my-cakes/rate-my-cakes.component';
import { ViewCakeComponent } from './view-cake/view-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    RateMyCakesComponent,
    ViewCakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
