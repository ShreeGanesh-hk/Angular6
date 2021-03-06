import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-charts',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    animations: [routerTransition()]
})
export class InventoryComponent implements OnInit {/*
    public moduleName = 'Inventory';
     public searchString;
     public checked;

     @ViewChild(MatTable) table: MatTable<any>;
     displayedColumns = [/!*'select', 'id',*!/ 'name', 'progress', 'color'];
     dataSource: MatTableDataSource<UserData>;

     @ViewChild(MatPaginator) paginator: MatPaginator;
     @ViewChild(MatSort) sort: MatSort;
     selection = new SelectionModel(true, []);

    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

     /!** Whether the number of selected elements matches the total number of rows. *!/
     isAllSelected() {
       const numSelected = this.selection.selected.length;
       const numRows = this.dataSource.data.length;
       return numSelected === numRows;
     }

     getSelected() {
       console.log(this.selection);
     }

     /!** Selects all rows if they are not all selected; otherwise clear selection. *!/
     masterToggle() {
       console.log(this.selection);
       this.isAllSelected() ?
         this.selection.clear() :
         this.dataSource.data.forEach(row => this.selection.select(row));
       console.log(this.selection);

     }

     onRowClicked(row) {
       console.log('Row clicked: ', row);
     }

     onPageableChange(val) {
       console.log(val);
     }

     constructor() {
       // Create 100 users
       const users: UserData[] = [];
       for (let i = 1; i <= 25; i++) { users.push(createNewUser(i)); }

       // Assign the data to the data source for the table to render
       this.dataSource = new MatTableDataSource(users);
     }

     dataSourceArray2() {
       return [{id: '18' , name: 'Jayanth' , progress: '99%' , address: 'uttarahalli' , color: 'blue'},
         {id: '27' , name: 'IronMan' , progress: '97%' , address: 'BIPS' , color: 'Maroon'}];
     }

     ngOnInit() {
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       /!*
       Below code is used to search particular column data from table
        *!/
       /!*this.dataSource.filterPredicate = (data: UserData, filter: string) => data.name.indexOf(filter) != -1;*!/
     }

     applyFilter(filterValue: string) {
       filterValue = filterValue.trim(); // Remove whitespace
       filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
       this.dataSource.filter = filterValue;
     }

     onSearch(filterValue) {
       alert(filterValue.value + ' really ??? Please wait , still functinality not implemented !');
       console.log(filterValue);
       console.log(this.searchString);
     }

     // todo: use observables to moniter changes in dtasource , listen to the events and then rerender
     // check mosh cart example
     onSortChange(obj) {
       console.log(obj);
       this.dataSource.data = this.dataSourceArray2();
       this.table.renderRows();
     }

*/

    name: string = "Jayanth";

    public moduleName = 'Inventory';
     public searchString;
     public checked;

     @ViewChild(MatTable) table: MatTable<any>;
     displayedColumns = ['select', 'assetId', 'assemblyStation', /*'zone',*/ 'baseLoc', 'currentLoc', 'type', 'qi', 'edit', 'delete'];
     dataSource: MatTableDataSource<AssetData>;

     @ViewChild(MatPaginator) paginator: MatPaginator;
     @ViewChild(MatSort) sort: MatSort;
     selection = new SelectionModel(true, []);


     /** Whether the number of selected elements matches the total number of rows. */
     isAllSelected() {
       const numSelected = this.selection.selected.length;
       const numRows = this.dataSource.data.length;
       return numSelected === numRows;
     }

     getSelected() {
       console.log(this.selection);
     }

     /** Selects all rows if they are not all selected; otherwise clear selection. */
     masterToggle() {
       console.log(this.selection);
       this.isAllSelected() ?
         this.selection.clear() :
         this.dataSource.data.forEach(row => this.selection.select(row));
       console.log(this.selection);

     }

     onRowClicked(row) {
       console.log('Row clicked: ', row);
     }

/*     onPageableChange(val) {
       console.log(val);
     }*/

     constructor() {

       const assetData: AssetData[] = [];
       createNewAsset(assetData);

       this.dataSource = new MatTableDataSource(assetData);
     }

     dataSourceArray2() {
       return [];
     }

     ngOnInit() {
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       /*
       Below code is used to search particular column data from table
        */
       /*this.dataSource.filterPredicate = (data: UserData, filter: string) => data.name.indexOf(filter) != -1;*/
     }

     applyFilter(filterValue: string) {
       filterValue = filterValue.trim(); // Remove whitespace
       filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
       this.dataSource.filter = filterValue;
     }

     onSearch(filterValue) {
       alert(filterValue.value + ' really ??? Please wait , still functinality not implemented !');
       console.log(filterValue);
       console.log(this.searchString);
     }

     // todo: use observables to moniter changes in dtasource , listen to the events and then rerender
     // check mosh cart example
     onSortChange(obj) {
       console.log(obj);
       this.dataSource.data = this.dataSourceArray2();
       this.table.renderRows();
     }
/*

    constructor() { }
    ngOnInit() { }
*/


}
function createNewAsset(assetData): AssetData {
    assetData.push({assetId: 'ZA45' , assemblyStation: 'Assembly1' , zone: 'Zone A' , baseLoc: 'Zone A' , currentLoc: 'Zone B', 'type':'Wrench' });
    assetData.push({assetId: 'ZA9' , assemblyStation: 'Assembly1' , zone: 'Zone A' , baseLoc: 'Zone A' , currentLoc: 'Zone A', 'type':'Wrench' });
    assetData.push({assetId: 'ZA18' , assemblyStation: 'Assembly1' , zone: 'Zone A' , baseLoc: 'Zone A' , currentLoc: 'Zone A', 'type':'Wrench' });
    assetData.push({assetId: 'ZA27' , assemblyStation: 'Assembly1' , zone: 'Zone A' , baseLoc: 'Zone A' , currentLoc: 'Zone A', 'type':'Wrench' });
    assetData.push({assetId: 'ZA36' , assemblyStation: 'Assembly1' , zone: 'Zone A' , baseLoc: 'Zone A' , currentLoc: 'Zone A', 'type':'Sling' });


  return assetData;
}


export interface AssetData {
  assetId: String;
  assemblyStation: string;
  zone: string;
  baseLoc: string;
  currentLoc: string;
  type: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

