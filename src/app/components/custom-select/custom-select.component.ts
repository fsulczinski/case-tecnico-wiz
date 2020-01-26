import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

    @Input() options: any[] = [];
    @Input() label: string;
    @Output() selectedOption = new EventEmitter();
    isSelectActive = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleActive() {
        this.isSelectActive = !this.isSelectActive;
    }
}
