import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { Signature } from '../../model/signature/_signature';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  // QUERY
  public GetObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature)
      .pipe(timeout(2000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public GetListOfObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature)
      .pipe(timeout(8000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public GetFullListOfObject(url: string): Observable<Object> {
    return this.httpClient.get(url)
      .pipe(timeout(20000), catchError(x => { console.log(x); return throwError(x); }));
  }

  // COMMAND
  public CreateObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature)
      .pipe(timeout(5000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public UpdateObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.put(url, signature)
      .pipe(timeout(5000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public DeleteObject(url: string, signature: Signature): Observable<Object> {
    const options = {
      response: 'json',
      body: signature
    };
    return this.httpClient.request('delete', url, options)
      .pipe(timeout(2000), catchError(x => { console.log(x); return throwError(x); }));
  }

  // -------- VERIFY ------  
  public Get(url: string): Observable<Object> {
    return this.httpClient.get(url)
      .pipe(timeout(1000), catchError(x => { console.log(x); return throwError(x); }));
  }
}