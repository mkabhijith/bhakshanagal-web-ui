import { Injectable } from '@angular/core';
import { IAddressList } from 'src/app/shared/types/address.type';



@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  addressList: IAddressList[] = [
    {
      id: 0,
      name: 'zuckur',
      phoneNo: 77777888854,
      pinCode: 1111666,
      locality: 'tvm',
      state: 'kerala',
      address: '1456 Edgewood Drive, Palo Alto, California',
      country: 'India',
      city: 'tvm',
      landMark: '',
      addressType: 'Home',
      alternativeNo: 12,
    },
    {
      id: 1,
      name: 'Abu',
      phoneNo: 77777888854,
      pinCode: 1111666,
      locality: 'tvm',
      state: 'kerala',
      address: '1456 Edgewood Drive, Palo Alto, California',
      country: 'India',
      city: 'tvm',
      landMark: '',
      addressType: 'Office',
      alternativeNo: 2665,
    },
  ];

  getAddress() {
    return this.addressList;
  }
}
