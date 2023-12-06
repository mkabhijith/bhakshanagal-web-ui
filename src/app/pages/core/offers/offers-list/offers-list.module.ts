import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersListRoutingModule } from './offers-list-routing.module';
import { OffersListComponent } from './offers-list.component';

import { SharedComponentModule } from "../../../../shared/components/shared-component.module";


@NgModule({
    declarations: [
        OffersListComponent
    ],
    imports: [
        CommonModule,
        OffersListRoutingModule,
        SharedComponentModule
    ]
})
export class OffersListModule { }
