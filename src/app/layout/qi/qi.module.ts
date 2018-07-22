import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { QiRoutingModule } from './qi-routing.module';
import { QiComponent } from './qi.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, QiRoutingModule, PageHeaderModule],
    declarations: [QiComponent]
})
export class QiModule {}
