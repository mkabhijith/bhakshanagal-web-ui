import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../home/home.type';
import { WatchlistService } from './watchlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit, OnDestroy {
  constructor(
    private cartService: CartService,
    private watchListService: WatchlistService
  ) {}
  watchlistLength = 0;
  watchListSubcription!: Subscription;
  watchListLengthSubscription!: Subscription;
  wishList: Iproduct[] = [];
  ngOnInit(): void {
    this.watchListService.getWatchList();
    this.watchListSubcription = this.watchListService.watchList$.subscribe({
      next: (res) => {
        console.log(this.wishList);
        const list: Iproduct[] = res;
        // if (res) {
        this.wishList = list;
        // this.wishList =
        this.wishList.forEach((item) => {
          if (item.image_file !== null) {
            item.image_file =
              'https://srv442800.hstgr.cloud:3000//' + item.image_file;
          }
          // return item;
        });
        // }
      },
    });
    this.watchListLengthSubscription =
      this.watchListService.watchListCount$.subscribe({
        next: (res) => {
          this.watchlistLength = res;
        },
      });
  }
  ngOnDestroy(): void {
    this.watchListSubcription.unsubscribe();
  }
  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  onRemoveItem(id: number) {
    this.watchListService.onWatchListRemoveItem(id);
  }
}
