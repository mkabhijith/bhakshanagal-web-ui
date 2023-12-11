import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/pages/core/account/address/address.service';
import { IAddressForm, IAddressList } from '../../types/address.type';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit {
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute
  ) {}

  addressForm = new FormGroup<IAddressForm>({
    name: new FormControl('', Validators.required),
    phoneNo: new FormControl(null, Validators.required),
    pinCode: new FormControl(null, Validators.required),
    locality: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    landMark: new FormControl(''),
    alternativeNo: new FormControl(),
    addressType: new FormControl('', Validators.required),
  });

  addressArray!: IAddressList[];
  addressData!: IAddressList;

  ngOnInit(): void {
    this.addressArray = this.addressService.getAddress();

    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        const address = this.addressArray.find((item) => item.id == id);
        if (address) {
          this.addressData = { ...address };
        }
      },
    });
    if (this.addressData) {
      this.addressForm.patchValue({
        name: this.addressData.name,
        phoneNo: this.addressData.phoneNo,
        pinCode: this.addressData.pinCode,
        city: this.addressData.city,
        locality: this.addressData.locality,
        address: this.addressData.address,
        state: this.addressData.state,
        landMark: this.addressData.landMark,
        alternativeNo: this.addressData.alternativeNo,
        addressType: this.addressData.addressType,
      });
    }
  }
  onSubmit() {
    if (this.addressForm.valid) {
      console.log('valid form', this.addressForm.value);
    }
  }
  clearForm(){
    this.addressForm.reset()
  }
}
