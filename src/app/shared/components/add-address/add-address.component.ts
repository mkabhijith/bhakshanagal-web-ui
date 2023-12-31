import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/pages/core/account/address/address.service';
import { LanguageService } from '../../services/language.service';
import { IAddressForm, IAddressList } from '../../types/address.type';
import { ILanguage } from '../../types/language.type';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
})
export class AddAddressComponent implements OnInit, OnDestroy {
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService
  ) {}
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

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
  onEditForm = false;
  ngOnInit(): void {
    this.addressArray = this.addressService.getAddress();

    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        const address = this.addressArray.find((item) => item.id == id);
        if (address) {
          this.addressData = { ...address };
          this.onEditForm = true;
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
      this.addressService.addAddress(this.addressForm.value)
      console.log('valid form', this.addressForm.value);
    }
  }
  clearForm() {
    this.addressForm.reset();
  }
  navgateToAccount() {
    this.router.navigate(['address']);
  }
}
