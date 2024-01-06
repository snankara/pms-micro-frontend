import { RequestModel, ResponseModel } from '@pms/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './api-url.token';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService { 

  protected abstract readonly url: string;
  private readonly apiUrl : string = inject(API_URL);
  private readonly httpClient = inject(HttpClient);

  add<T extends ResponseModel, D extends RequestModel>(data: D): Observable<T>{ 
    return this.httpClient.post<T>(`${this.apiUrl}${this.url}`, data);
  }

  update<T extends ResponseModel, D extends RequestModel>(data: D): Observable<T>{
    return this.httpClient.put<T>(`${this.apiUrl}${this.url}`, data)
  }

  delete<T extends ResponseModel>(id: number): Observable<T>{
    return this.httpClient.delete<T>(`${this.apiUrl}${this.url}/${id}`);
  }

  get<T extends ResponseModel>(params: HttpParams): Observable<T>{
    return this.httpClient.get<T>(`${this.apiUrl}${this.url}`, {params: params})
  }
}
