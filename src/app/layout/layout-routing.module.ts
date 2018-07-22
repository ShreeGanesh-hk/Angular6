import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {ManageassetModule} from './manageasset/manageasset.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' },
            { path: 'qi', loadChildren: './qi/qi.module#QiModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'manageasset', loadChildren: './manageasset/manageasset.module#ManageassetModule' },
           // { path: 'zonedetails', loadChildren: '/charts/' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
