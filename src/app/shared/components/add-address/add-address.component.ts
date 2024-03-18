import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/pages/core/account/address/address.service';
import { LanguageService } from '../../services/language.service';
import { IAddressForm } from '../../types/address.type';
import { ILanguage } from '../../types/language.type';
import { Subscription } from 'rxjs';

import { IAddress } from 'src/app/pages/core/account/address/address.type';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private addressService: AddressService
  ) {}
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  addressForm = new FormGroup<IAddressForm>({
    full_name: new FormControl('', Validators.required),
    phone_number: new FormControl(null, Validators.required),
    alt_phone_number: new FormControl(null),
    landmark: new FormControl('', Validators.required),
    building_name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    area_name: new FormControl(''),
    pincode: new FormControl(),
    address_id: new FormControl(),
  });

  addressArray!: IAddress[];
  addressData!: IAddress;
  onEditForm = false;
  loginInProgress = false;
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.addressService.getAddressList().subscribe({
          next: (res) => {
            this.addressArray = res.list;
            const address = this.addressArray.find(
              (item) => item.address_id == id
            );
            if (address) {
              this.addressData = { ...address };
              this.onEditForm = true;
              if (this.addressData) {
                this.addressForm.patchValue({
                  full_name: this.addressData.address_fullname,
                  phone_number: this.addressData.address_phone_number,
                  alt_phone_number: this.addressData.address_alt_phone_number,
                  city: this.addressData.address_city,
                  landmark: this.addressData.address_landmark,
                  building_name: this.addressData.address_building_name,
                  state: this.addressData.address_state,
                  area_name: this.addressData.address_area_name,
                  pincode: this.addressData.address_pincode,
                  address_id: this.addressData.address_id,
                });
              }
            }
          },
        });
      },
    });

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  onSubmit() {
    if (this.addressForm.valid) {
      this.loginInProgress = true;
      if (!this.onEditForm) {
        this.addressService.addAddress(this.addressForm.value).subscribe({
          next: (res) => {
            this.loginInProgress = false;
            if (res.result) {
              this.router.navigateByUrl('account/address');
              this.addressService.setAddress(1);
            }
          },
        });
      } else {
        this.addressService.editAddress(this.addressForm.value).subscribe({
          next: (res) => {
            this.loginInProgress = false;
            if (res.result) {
              this.router.navigateByUrl('account/address');
            }
          },
        });
      }
    } else {
      alert('form invalid');
    }
  }
  clearForm() {
    this.addressForm.reset();
  }
  navgateToAccount() {
    this.router.navigate(['address']);
  }
}
