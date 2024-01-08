import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface dropDownArray {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  QuantityUnits: dropDownArray[] = [
    {
      id: 0,
      name: 'Kg',
    },
    {
      id: 1,
      name: 'grams',
    },
    {
      id: 2,
      name: 'piece',
    },
  ];

  categorys: dropDownArray[] = [
    {
      id: 0,
      name: 'sweets',
    },
    {
      id: 1,
      name: 'crispies',
    },
    {
      id: 2,
      name: 'chips',
    },
  ];

  onEditForm: boolean = false;
  productForm = new FormGroup<any>({
    productName: new FormControl('', Validators.required),
    productQuantity: new FormControl(null, Validators.required),
    productQuantityUnit: new FormControl('', Validators.required),
    priceINR: new FormControl(null, Validators.required),
    priceAED: new FormControl(null, Validators.required),
    priceGBP: new FormControl(null, Validators.required),
    priceUSD: new FormControl(null, Validators.required),
    priceAUD: new FormControl(null, Validators.required),
    description: new FormControl('', Validators.required),
    shipping: new FormControl('', Validators.required),
    freeDelivary: new FormControl('', Validators.required),
    delivaryOption: new FormControl('', Validators.required),
    reFund: new FormControl('', Validators.required),
    coupon: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      console.log('valid form');
    }
  }
  resetForm() {}
  onImageChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.productForm.patchValue({
      image: file,
    });
  }
}
