import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IOfferListRes {
  result: boolean;
  message: string;
  data: [
    {
      offer_name: string;
      offer_description: string;
      offer_image: string | any;
      offer_status: string;
      offer_created_at: string;
      offer_start_date: string;
      offer_end_date: string;
      product: [
        {
          product_id: number;
          product_name: string;
          price: number;
          quantity: number;
          image_file: null | any;
        }
      ];
    }
  ];
}

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private httpClient: HttpClient) {}
  offersList() {
    return this.httpClient.post<IOfferListRes>(`bhakshanangal/listoffer`, '');
  }
}
