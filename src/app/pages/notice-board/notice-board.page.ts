import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import {Notice, Batch, Course, NoticePost} from '../../notice';
import {BatchesService} from '../../services/batches.service';
import { CoursesService } from '../../services/courses.service';
import {Observable} from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MaterialModule } from "../../material.module";
// import { DataSource } from "@angular/cdk/collections";

// import { Batch } from "../../notice";

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.page.html',
  styleUrls: ['./notice-board.page.scss'],
})
export class NoticeBoardPage implements OnInit {
  public notices = [];
  public batches = [];
  public courses = [];
  public textdata = '';
  public  selectedBatch = null;
  public selectedCourse = null;
  newpost: Observable<Notice>;

  constructor(private _noticeservice: NoticeService,
              private _batchservice: BatchesService,
              private _courseservices: CoursesService) { }

  ngOnInit() {
    this._noticeservice.getNotices()
        .subscribe(data => this.notices = data);
    this._batchservice.getBatches()
        .subscribe(x => this.batches = x);
    this._courseservices.getCourses()
        .subscribe(y => this.courses = y);
  }

  createNotice() {
    console.log("..createNotice() running");
    this._noticeservice
    .postNotice({
        sender: 1 ,
        course: this.selectedCourse,
        batch: this.selectedBatch,
        student: null,
        body: this.textdata,
    })
    .subscribe(item => this.notices.push(item));
    this._noticeservice.getNotices()
    .subscribe(data => this.notices = data);
  }


}
