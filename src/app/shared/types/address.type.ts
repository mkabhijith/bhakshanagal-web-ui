import { FormControl } from '@angular/forms';



export interface IAddressForm {
  full_name: FormControl<string | null>;
  phone_number: FormControl<number | null>;
  alt_phone_number: FormControl<number | null>;
  pincode: FormControl<number | null>;
  state: FormControl<string | null>;
  city: FormControl<string | null>;
  building_name: FormControl<string | null>;
  area_name: FormControl<string | null>;
  landmark: FormControl<string | null>;
  // addressType: FormControl<string | null>;
  address_id: FormControl<number | null>;
}
