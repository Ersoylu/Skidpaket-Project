import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { SkiTypeComponent } from './skype-type/ski-type.component';

const routes: Routes = [
  { path: 'booking-page/:id', component: BookingPageComponent },
  { path: 'create-booking/:id', component: CreateBookingComponent },
  { path: '', component: SkiTypeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
