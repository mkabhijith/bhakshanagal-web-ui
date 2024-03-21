import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IResOrderInfo {
  result: boolean;
  message: string;
  data: [
    {
      product_id: number;
      product_name: string;
      price: number;
      quantity: number;
      image_file: string | null;
      order_id: number;
      order_quantity: number;
      order_unit: string;
      gift_card: string;
    }
  ];
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpclient: HttpClient) {}

  orderList() {
    return this.httpclient.post<IResOrderInfo>(`bhakshanangal/orderlist`, {});
  }
}
