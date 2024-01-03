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

  addAddress(form: any) {
    // const count = 0;
    form.id = 3;
    this.addressList.push(form);
  }
  removeAddress(id: number) {
    const index = this.addressList.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.addressList.splice(index, 1);
    }
  }
}
