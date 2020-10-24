import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule} from "@angular/material/paginator";
import {TableComponent} from "./components/table/table.component";


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    // MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      TableComponent,
  ]
})
export class MaterialModule { }
