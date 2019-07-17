import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RateMyCakesComponent } from './rate-my-cakes/rate-my-cakes.component';
import { ViewCakeComponent } from './view-cake/view-cake.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    RateMyCakesComponent,
    ViewCakeComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
			FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
