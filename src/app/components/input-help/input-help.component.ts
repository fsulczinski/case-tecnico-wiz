import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-help',
    templateUrl: './input-help.component.html',
    styleUrls: ['./input-help.component.scss']
})
export class InputHelpComponent implements OnInit {

    @Input() input: any;

    constructor() {
    }

    ngOnInit() {
        console.log(this.input);
    }

}
