import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../home/home.type';
import { WatchlistService } from './watchlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private watchListService: WatchlistService
  ) {}

  watchListSubcription!: Subscription;
  cartListSubscription!: Subscription;
  wishList: Iproduct[] = [];
  ngOnInit(): void {
    this.cartListSubscription = this.cartService.cartList$.subscribe({
      next: (res) => {
        const list: Iproduct[] = res;
        this.wishList = list.map((item) => {
          if (item.image_file !== null) {
            item.image_file =
              'https://srv442800.hstgr.cloud:3000//' + item.image_file;
          }
          return item;
        });
      },
    });
  }
  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  onRemoveItem(id: number) {
    this.watchListService.onWatchListRemoveItem(id);
  }
}
