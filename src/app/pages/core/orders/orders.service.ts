import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private httpClient :HttpClient) {}
 
  
  returnOrderList() {
    return this.httpClient.post<any>(`bhakshanangal/orderlist`,{});
  }
}
