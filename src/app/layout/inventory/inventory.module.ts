import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsModule as Ng2Charts} from 'ng2-charts';

import {InventoryRoutingModule} from './inventory-routing.module';
import {InventoryComponent} from './inventory.component';
import {PageHeaderModule} from '../../shared';
import {MaterialModule} from '../../shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [CommonModule, Ng2Charts, InventoryRoutingModule, PageHeaderModule, MaterialModule, FormsModule,
        ReactiveFormsModule,],
    declarations: [InventoryComponent]
})
export class InventoryModule {
}
