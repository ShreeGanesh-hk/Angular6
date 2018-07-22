import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatComponent } from './stat.component';
import {StatRoutingModule} from "./stat-routing.module";

@NgModule({
    imports: [CommonModule, StatRoutingModule],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule {}
