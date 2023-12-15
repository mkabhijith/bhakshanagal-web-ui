import { FormControl } from '@angular/forms';

export interface IAddressList {
  id: number;
  name: string;
  pinCode: number;
  phoneNo: number;
  locality: string;
  address: string;
  country: string;
  city: string;
  state: string;
  landMark: string;
  addressType: string;
  alternativeNo: number;
}

export interface IAddressForm {
  name: FormControl<string | null>;
  phoneNo: FormControl<number | null>;
  pinCode: FormControl<number | null>;
  locality: FormControl<string | null>;
  address: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  landMark: FormControl<string | null>;
  alternativeNo: FormControl<number | null>;
  addressType: FormControl<string | null>;
}
