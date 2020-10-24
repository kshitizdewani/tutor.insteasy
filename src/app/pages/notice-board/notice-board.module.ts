import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NoticeBoardPageRoutingModule } from './notice-board-routing.module';
import { NoticeBoardPage } from './notice-board.page';
import { MaterialModule } from "../../material.module";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticeBoardPageRoutingModule,
    MaterialModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatTableModule,
  ],
  declarations: [NoticeBoardPage]
})
export class NoticeBoardPageModule {}
