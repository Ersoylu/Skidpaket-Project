import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skiEquipmentsData } from '../ski-equipments';
@Component({
    selector: 'app-ski-type',
    templateUrl: './create-booking.component.html',
    styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
    skiType: string = ""
    namn: string = "";
    id: string = "";
    constructor(private router_srv: Router, private route: ActivatedRoute) {
        //this.transaction = new BankTransaction(1000, undefined, "opening", TransactionType.openAcount);

    }
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params["id"];
            skiEquipmentsData.forEach(data => {
                if (data.id == params["id"]) {
                    this.skiType = data.header;
                }
            });
        });
    }
    booking() {
        console.log("Entered name", this.namn);
        this.router_srv.navigateByUrl(`/booking-page/${this.id}`);
    }
    cancel() {
        this.router_srv.navigateByUrl(`/`);
    }
}