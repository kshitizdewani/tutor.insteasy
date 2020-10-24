import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Notice, NoticePost} from '../notice';
import {convertUpdateArguments} from "@angular/compiler/src/compiler_util/expression_converter";

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  newNotice: Observable<any>;

  constructor(  private httpClient: HttpClient) { }

  getNotices(): Observable<Notice[]>{
    console.log('object fetch request sent...');
    return this.httpClient.get<Notice[]>('http://127.0.0.1:8000/api/notices');
  }

  postNotice(data: NoticePost): Observable<Notice>{
    // const data: NoticePost = {
    //   sender: tutor,
    //   course: crs,
    //   batch: btch,
    //   student: studnt,
    //   body: announcement,
    // };
    // console.log('..posting notice');
    // console.log(data);
    // alert('post triggered');
    return this.httpClient.post<Notice>('http://127.0.0.1:8000/api/notices/', data)
        .pipe(
        catchError(this.handleError)
        );

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
