import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) {}

  cartListSubscription!: Subscription;
  cartList: any[] = [];
  ngOnInit(): void {
    this.cartListSubscription = this.cartService.cartList$.subscribe({
      next: (res) => {
        this.cartList = res;
      },
    });
  }
  ngOnDestroy(): void {
    this.cartListSubscription.unsubscribe();
  }

  onItemRemove(id: number) {
    this.cartService.onCartRemoveItem(id);
  }
}
