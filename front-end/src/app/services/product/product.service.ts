import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API_SERVICES } from '../../config/config';
import { Observable } from 'rxjs';
import { product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
  private url = URL_API_SERVICES + '/products';

  public getAll(page: number, records: number) : Observable<any>{
    let params = new HttpParams();
    params = params.append('page',page.toString());
    params = params.append('Records per page',records.toString());
    return this.http.get<product[]>(this.url, {observe: 'response', params});
  }

  public getById(id: number) : Observable<product>{
    return this.http.get<product>(`${this.url}/${id}`);
  }

  public create(product: product){
    return this.http.post(this.url, product);
  }

  public update(id: number, product: product){
    return this.http.put(`${this.url}/${id}`, product);
  }

  public delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
