import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INormalResponce } from 'src/app/shared/types/normalRes.type';

export interface IViewProfileResponce {
  result: boolean;
  message: string;
  list: {
    user_id: number;
    fist_name: string;
    last_name: string;
    email: string;
    mobile: number;
    address: {
      address_id: string | null;
      building_name: string | null;
      area_name: string | null;
      landmark: string | null;
      city: string | null;
      state: string | null;
      pincode: string | null;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class CheckOutService {
  constructor(private httpClient: HttpClient) {}
  validateCoupon(key: string) {
    const payload = {
      coupon_code: key,
    };
    return this.httpClient.post<INormalResponce>(
      `bhakshanangal/validate-coupon`,
      payload
    );
  }

  viewProfile() {
    return this.httpClient.post<IViewProfileResponce>(`bhakshanangal/view-profile`, {});
  }
}
