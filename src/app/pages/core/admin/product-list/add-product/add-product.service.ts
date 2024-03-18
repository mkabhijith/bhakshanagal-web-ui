import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IAddProductRes {
  result: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  constructor(private httpClient: HttpClient) {}

  addProduct(payload: any) {
    const p = {
      product_name: 'lays',
      product_description: 'crispy snacks',
      priceinINR: '20',
      priceinUSD: '20',
      priceinEUR: '10',
      priceinAED: '1',
      quantity: '1',
      shipping: '1',
      cod: '1',
      refund: '1',
      free_delivery: '1',
      category: '2',
      unit: 'gm',
      image: {},
    };
    console.log(payload);

    return this.httpClient.post<IAddProductRes>(`bhakshanangal/addproduct`, p);
  }
}
