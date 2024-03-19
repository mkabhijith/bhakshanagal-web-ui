import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient :HttpClient) { }

  orderList(){
    return this.httpclient.post<any>(`bhakshanangal/orderlist`,{})
  }
}
