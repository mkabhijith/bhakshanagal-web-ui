import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IproductCart } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';
import { CheckOutService } from './check-out.service';
import { FormControl, FormGroup } from '@angular/forms';
declare var Razorpay: any;

export interface IUserInfo {
  user_id: number;
  fist_name: string;
  last_name: string;
  email: string;
  mobile: number;
  address: {
    address_id: string | null;
    building_name: string | null;
    area_name: string | null;
    landmark: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
  };
}

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private checkOutService: CheckOutService
  ) {}
  options: string[] = ['Bank', 'Cash on delivery'];
  selectedOption: string = 'Bank';
  coupon: string = '';
  visible = false;
  subtotal: number = 0;
  orderItems: IproductCart[] = [];
  isLoader = false;
  isRead = true;
  userInfo!: IUserInfo;
  addressForm = new FormGroup<any>({
    fist_name: new FormControl(''),
    // address_id: new FormControl(''),
    landmark: new FormControl(''),
    building_name: new FormControl(''),
    city: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
  });
  ngOnInit(): void {
    const encodedArray = this.route.snapshot.queryParamMap.get('arrayParam');
    if (encodedArray) {
      const decodedArray = decodeURIComponent(encodedArray);
      const myArray = JSON.parse(decodedArray);
      this.orderItems = myArray;
      this.subtotal = this.orderItems.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      );
    }
    this.checkOutService.viewProfile().subscribe({
      next: (res) => {
        this.userInfo = res.list;
        this.addressForm.patchValue({
          fist_name: res.list.fist_name,
          landmark: res.list.address.landmark,
          building_name: res.list.address.building_name,
          city: res.list.address.city,
          mobile: res.list.mobile,
          email: res.list.email,
        });
      },
    });
    // Parse the JSON string back to an array
  }

  onVisibleGiftCard() {
    this.visible = true;
  }

  buy() {
    if (this.selectedOption !== 'Bank') {
      const payload = {
        amount: this.subtotal,
        currency: 'INR',
        receipt: '',
        notes: {
          description: 'sample',
          name: this.userInfo.fist_name,
          ingredients: 'sweet',
        },
      };
      this.isLoader = true;
      this.cartService.createOrder(payload).subscribe({
        next: (res) => {
          this.isLoader = false;
          console.log('order res', res);
        },
      });
    } else {
      const RozerPayOptions = {
        description: 'sample',
        currency: 'INR',
        amount: this.subtotal * 100,
        name: this.userInfo.fist_name,
        Image: '',
        key: 'rzp_test_az7fEZxXoBzThm',
        prefills: {
          name: this.userInfo.fist_name,
          email: this.userInfo.email,
          phone: this.userInfo.mobile,
        },
        theme: {
          color: 'red',
        },
        modal: {
          ondismiss: () => {
            console.log('dissmissed');
          },
        },
      };
      const successCallback = (paymentId: any) => {
        const payload = {
          amount: this.subtotal,
          currency: 'INR',
          receipt: '',
          notes: {
            description: 'Best food',
            name: 'Laddu',
            ingredients: 'sweet',
          },
        };
        this.isLoader = true;
        this.cartService.createOrder(payload).subscribe({
          next: (res) => {
            this.isLoader = false;
            console.log('order res', res);
          },
        });
      };

      const failureCallback = (e: any) => {
        console.log(e, 'cancel');
      };
      // this.cartService.createOrder(payload).subscribe({
      //   next: (res) => {
      //     console.log('order res', res);
      //   },
      // });

      Razorpay.open(RozerPayOptions, successCallback, failureCallback);
    }
  }

  applyCoupon() {
    this.isLoader = true;
    this.checkOutService.validateCoupon(this.coupon).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoader = false;
      },
    });
    // this.isLoader = false;
  }
}
