import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { StatModule } from '../../shared';
import {MaterialModule} from '../../shared/material.module';
import { ZonedetailsComponent } from './zonedetails/zone.component'
@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule, StatModule, MaterialModule],
    declarations: [ChartsComponent, ZonedetailsComponent]
})
export class ChartsModule {}
