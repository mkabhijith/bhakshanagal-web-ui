import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductView, IProductViewResponce } from './product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProduct(id:number){
    const payload ={
      product_id:[id]
    }
    return this.httpClient.post<IProductViewResponce>(`bhakshanangal/productview`,payload)
  }
}
