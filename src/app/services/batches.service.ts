import { Injectable } from '@angular/core';
import { Batch } from '../notice';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  constructor(private httpClient: HttpClient) { }
  getBatches(): Observable<Batch[]>{
    console.log('..fetching batches..');
    return this.httpClient.get<Batch[]>('http://insteasy.herokuapp.com/api/batches');
  }
}
