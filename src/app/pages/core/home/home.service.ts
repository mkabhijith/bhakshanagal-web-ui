import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductList } from './home.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getProductList() {
    return this.httpClient.post<IProductList>(`bhakshanangal/productlist`, {});
  }
}
