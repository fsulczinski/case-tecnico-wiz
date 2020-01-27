import { Component, Input, OnInit } from '@angular/core';
import { MOVIEDB_IMAGE_BASE_URL } from '../../moviedb-config';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    @Input() movie: any;
    posterBaseUrl: string = MOVIEDB_IMAGE_BASE_URL;

    constructor() {
    }

    ngOnInit() {
        console.log(this.movie);
    }

}
