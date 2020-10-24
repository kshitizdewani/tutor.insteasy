import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../notice";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }
  getCourses(): Observable<Course[]>{
    console.log('..fetching courses..');
    return this.httpClient.get<Course[]>('http://127.0.0.1:8000/api/courses');
  }
}
