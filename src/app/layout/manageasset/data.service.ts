import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Assembly} from './assets';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class DataService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  addAssembly (assembly: Assembly): Observable<Assembly> {
    return this.http.put<Assembly>(this.configUrl, assembly, httpOptions)
      .pipe();
  }
}