import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { SkiTypeComponent } from './skype-type/ski-type.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingPageComponent,
    CreateBookingComponent,
    SkiTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
