import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API_SERVICES } from '../../config/config';
import { Observable } from 'rxjs';
import { customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) { }
  private url = URL_API_SERVICES + '/customers';

  public getAll(page: number, records: number) : Observable<any>{
    let params = new HttpParams();
    params = params.append('page',page.toString());
    params = params.append('Records per page',records.toString());
    return this.http.get<customer[]>(this.url, {observe: 'response', params});
  }

  public getById(id: number) : Observable<customer>{
    return this.http.get<customer>(`${this.url}/${id}`);
  }

  public create(customer: customer){
    return this.http.post(this.url, customer);
  }

  public update(id: number, customer: customer){
    return this.http.put(`${this.url}/${id}`, customer);
  }

  public delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
