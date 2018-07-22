import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageassetComponent } from './manageasset.component';

const routes: Routes = [
    {
        path: '',
        component: ManageassetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageassetRoutingModule {}
