import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IproductCart } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';

declare var Razorpay: any;

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  options: string[] = ['Bank', 'Cash on delivery'];
  selectedOption: string = 'Bank';

  visible = false;
  subtotal: number = 0;
  orderItems: IproductCart[] = [];
  ngOnInit(): void {
    const encodedArray = this.route.snapshot.queryParamMap.get('arrayParam');
    if (encodedArray) {
      const decodedArray = decodeURIComponent(encodedArray);
      const myArray = JSON.parse(decodedArray);
      console.log(myArray);
      this.orderItems = myArray;
      this.subtotal = this.orderItems.reduce(
        (sum, product) => sum + product.totalPrice,
        0
      );
    }

    // Parse the JSON string back to an array
  }

  onVisibleGiftCard() {
    this.visible = true;
  }

  buy() {
    console.log(this.selectedOption);
    if (this.selectedOption !== "Bank") {
      console.log('auth');
    } else {

      const payload = {
        amount: this.subtotal,
        currency: 'INR',
        receipt: '',
        notes: {
          description: 'sample',
          name: 'umesh',
          ingredients: 'sweet',
        },
      };

      this.cartService.createOrder(payload).subscribe({
        next: (res) => {
          console.log('order res', res);
        },
      });

      const RozerPayOptions = {
        description: 'sample',
        currency: 'INR',
        amount: this.subtotal * 100,
        name: 'sai',
        Image: '',
        key: 'rzp_test_az7fEZxXoBzThm',
        prefills: {
          name: 'sai krishna',
          email: 'saigmail.com',
          phone: '98989898',
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
        console.log(paymentId);
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
        this.cartService.createOrder(payload).subscribe({
          next: (res) => {
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
}
