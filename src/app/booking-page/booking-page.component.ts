import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skiEquipmentsData } from '../ski-equipments';
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  bookno: string = "";
  package: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookno = this.getBookingNo()
    this.route.params.subscribe(params => {

      skiEquipmentsData.forEach(data => {
        if (data.id == params["id"]) {
          this.package = data.header;
        }
      });
    });
  }
  getBookingNo() {
    return (Math.random() * 1e32).toString(36);
  }
}
