import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent {
    title = 'Join me';
    subtitle = 'Meet your fiends';
    createEvent = 'Create event';
}
