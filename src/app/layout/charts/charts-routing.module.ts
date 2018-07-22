import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ZonedetailsComponent} from "./zonedetails/zone.component";

const routes: Routes = [
    {
        path: '',
        component: ChartsComponent
    },
    { path: 'zonedetails', component: ZonedetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
