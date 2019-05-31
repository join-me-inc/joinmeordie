import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-e-creation',
    templateUrl: './e-creation.component.html',
    styleUrls: ['./e-creation.component.css']
})
export class ECreationComponent implements OnInit {
    title = 'Create event';

    @ViewChild('creationForm')
    creationForm: NgForm;

    constructor() {}

    ngOnInit() {}

    onSubmit() {}
}
