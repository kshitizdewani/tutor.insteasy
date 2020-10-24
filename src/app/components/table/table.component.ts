import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import {Observable} from 'rxjs';
import { Notice } from "../../notice";
import { NoticeService } from "../../services/notice.service";
import {BatchesService} from "../../services/batches.service";
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Notice>;
  newpost: Observable<Notice>;
  dataSource: TableDataSource;
  public notices = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
        'sender',
        'course',
        'batch',
        'student',
        'body',
  ];

  constructor(private _noticeservice: NoticeService) { }

  ngOnInit() {
    this.dataSource = new TableDataSource();
    this._noticeservice.getNotices()
        .subscribe(data => this.notices = data);

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.notices;
  }
}
