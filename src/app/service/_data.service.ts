import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { Signature } from '../model/signature/_signature';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // QUERY
  public GetObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature, this.httpOptions)
      .pipe(timeout(2000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public GetListOfObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature, this.httpOptions)
      .pipe(timeout(8000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public GetFullListOfObject(url: string): Observable<Object> {
    return this.httpClient.get(url, this.httpOptions)
      .pipe(timeout(20000), catchError(x => { console.log(x); return throwError(x); }));
  }

  // COMMAND
  public CreateObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature, this.httpOptions)
      .pipe(timeout(1500), catchError(x => { console.log(x); return throwError(x); }));
  }

  public UpdateObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.put(url, signature, this.httpOptions)
      .pipe(timeout(1500), catchError(x => { console.log(x); return throwError(x); }));
  }

  public DeleteObject(url: string, signature: Signature): Observable<Object> {
    const options = {
      headers: this.httpOptions.headers,
      response: this.httpOptions.response,
      body: signature
    };
    return this.httpClient.request('delete', url, options)
      .pipe(timeout(1500), catchError(x => { console.log(x); return throwError(x); }));
  }

  public Get(url: string): Observable<Object> {
    return this.httpClient.get(url, this.httpOptions)
      .pipe(timeout(100), catchError(x => { console.log(x); return throwError(x); }));
  }

  // CONFIG
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'DN-MR-WASATAIN-COMMAND-QUERY': 'HORTI',
    }),
    response: 'json'
  };
}