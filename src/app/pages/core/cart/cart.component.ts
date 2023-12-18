import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private storageService: StorageService
  ) {}

  cartListSubscription!: Subscription;
  cartList: any[] = [];
  ngOnInit(): void {
    // this.cartService.getCart();
    console.log('cart oninit');

    // this.cartService.getCart();
    this.cartListSubscription = this.cartService.cartList$.subscribe({
      next: (res) => {
        console.log(res);

        this.cartList = res;
        console.log('cartlist', this.cartList);
      },
    });
    console.log('ng', this.cartList);

    console.log('after', this.cartList.length);
  }

  onItemRemove(id: number) {
    this.cartService.onCartRemoveItem(id);
  }
}
