import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API_SERVICES } from '../config/config';
import { Observable } from 'rxjs';
import { Brand } from './brand';


@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  constructor(public http: HttpClient) { }
  private url = URL_API_SERVICES + '/brands';

  public getAll(page: number, records: number) : Observable<Brand[]>{
    return this.http.get<Brand[]>(`${this.url}/?page=${page}&recordsPerPage=${records}`);
  }

  public getById(id: number) : Observable<Brand>{
    return this.http.get<Brand>(`${this.url}/${id}`);
  }

  public create(brand: Brand){
    return this.http.post(this.url, brand);
  }

  public update(id: number, brand: Brand){
    return this.http.put(`${this.url}/${id}`, brand);
  }

  public delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
