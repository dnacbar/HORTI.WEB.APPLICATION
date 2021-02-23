import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
  public GetObject<T>(url: string, signature: Signature): Observable<T> {
    return this.httpClient.post<T>(this.urlBaseQuery + url, signature, this.httpOptions)
      .pipe(timeout(2000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public GetListOfObject<T>(url: string, signature: Signature): Observable<Array<T>> {
    return this.httpClient.post<Array<T>>(this.urlBaseQuery + url, signature, this.httpOptions)
      .pipe(timeout(8000), catchError(x => { console.log(x); return throwError(x); }));
  }

  public GetFullListOfObject<T>(url: string): Observable<Array<T>> {
    return this.httpClient.post<Array<T>>(this.urlBaseQuery + url, null, this.httpOptions)
      .pipe(timeout(20000), catchError(x => { console.log(x); return throwError(x); }));
  }

  // COMMAND
  public CreateObject(url: string, signature: Signature): Observable<HttpResponse<Object>> {
    return this.httpClient.post<HttpResponse<Object>>(this.urlBaseCommand + url, signature, this.httpOptions)
      .pipe(timeout(1500), catchError(x => { console.log(x); return throwError(x); }));
  }

  public UpdateObject(url: string, signature: Signature): Observable<HttpResponse<Object>> {
    return this.httpClient.put<HttpResponse<Object>>(this.urlBaseCommand + url, signature, this.httpOptions)
      .pipe(timeout(1500), catchError(x => { console.log(x); return throwError(x); }));
  }

  public DeleteObject(url: string, signature: Signature): Observable<HttpResponse<Object>> {
    const options = {
      headers: this.httpOptions.headers,
      response: this.httpOptions.response,
      body: signature
    };
    return this.httpClient.request<HttpResponse<Object>>('delete', this.urlBaseCommand + url, options)
      .pipe(timeout(1500), catchError(x => { console.log(x); return throwError(x); }));
  }

  // CONFIG
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'DN-MR-WASATAIN': 'HORTI'
    }),
    response: 'json'
  };
  private urlBaseCommand = environment.urlBaseCommand;
  private urlBaseQuery = environment.urlBaseQuery;
}