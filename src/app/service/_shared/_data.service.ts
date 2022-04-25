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
    return this.httpClient.post(url, signature).pipe(timeout(2000));
  }

  public GetListOfObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature).pipe(timeout(8000));
  }

  public GetFullListOfObject(url: string): Observable<Object> {
    return this.httpClient.get(url).pipe(timeout(20000));
  }

  // COMMAND
  public CreateObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.post(url, signature).pipe(timeout(5000));
  }

  public UpdateObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.put(url, signature).pipe(timeout(5000));
  }

  public DeleteObject(url: string, signature: Signature): Observable<Object> {
    return this.httpClient.request('delete', url, { body: signature }).pipe(timeout(2000));
  }

  // -------- VERIFY ------  
  public Get(url: string): Observable<Object> {
    return this.httpClient.get(url).pipe(timeout(1000));
  }
}