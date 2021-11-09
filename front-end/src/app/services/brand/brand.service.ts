import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API_SERVICES } from '../../config/config';
import { Observable } from 'rxjs';
import { brand } from './brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(public http: HttpClient) { }
  private url = URL_API_SERVICES + '/brands';

  public getAll(page: number, records: number) : Observable<any>{
    let params = new HttpParams();
    params = params.append('page',page.toString());
    params = params.append('Records per page',records.toString());
    return this.http.get<brand[]>(this.url, {observe: 'response', params});
  }

  public getById(id: number) : Observable<brand>{
    return this.http.get<brand>(`${this.url}/${id}`);
  }

  public create(brand: brand){
    return this.http.post(this.url, brand);
  }

  public update(id: number, brand: brand){
    return this.http.put(`${this.url}/${id}`, brand);
  }

  public delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
