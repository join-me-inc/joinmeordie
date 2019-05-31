import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';
import { AppRoutingModule } from './app-routing.module';
import * as moment from 'moment';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class JoinAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        // this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
