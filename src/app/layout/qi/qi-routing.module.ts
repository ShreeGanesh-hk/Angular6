import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QiComponent } from './qi.component';

const routes: Routes = [
    {
        path: '',
        component: QiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QiRoutingModule {}
