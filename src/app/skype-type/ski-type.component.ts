import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skiEquipmentsData } from '../ski-equipments';
@Component({
    selector: 'app-ski-type',
    templateUrl: './ski-type.component.html',
    styleUrls: ['./ski-type.component.scss']
})
export class SkiTypeComponent implements OnInit {
    skiEquipmentsDatalist: any[] = [] as any;
    constructor(private router_srv: Router) {
        skiEquipmentsData.forEach(element => {
            this.skiEquipmentsDatalist.push({ isViewMore: false, ...element })
        });

    }
    ngOnInit(): void {

    }
    viewMore(i: number) {
        this.skiEquipmentsDatalist[i].isViewMore = true
    }
    viewLess(i: number) {
        this.skiEquipmentsDatalist[i].isViewMore = false
    }
    createBooking(i: number) {

        this.router_srv.navigateByUrl(`/create-booking/${this.skiEquipmentsDatalist[i].id}`);
    }
}