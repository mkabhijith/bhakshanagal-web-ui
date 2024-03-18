import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAddAddressResponce,
  IAddress,
  IAddressListResponce,
} from './address.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private httpClient: HttpClient) {}

  getAddressList() {
    return this.httpClient.get<IAddressListResponce>(
      `bhakshanangal/addresslist`
    );
  }

  addAddress(payload: any) {
    return this.httpClient.post<IAddAddressResponce>(
      `bhakshanangal/addaddress`,
      payload
    );
  }

  editAddress(payload: any) {
    return this.httpClient.post<IAddAddressResponce>(
      `bhakshanangal/edit-address`,
      payload
    );
  }

  removeAddress(id: number) {
    const payload = {
      address_id: id,
    };
    return this.httpClient.post<any>(`bhakshanangal/remove-address`, payload);
  }

  setAddress(id: number) {
    const payload = {
      address_id: id,
    };
    return this.httpClient.post<any>('bhakshanangal/setaddress', payload);
  }
}
