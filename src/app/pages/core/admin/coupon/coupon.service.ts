import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private httpclient: HttpClient) {}

  addCoupon(payload: any) {
   return this.httpclient.post<any>(`bhakshanangal/add_coupon`, payload);
  }
}
