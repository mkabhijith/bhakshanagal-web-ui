import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor() {}

  private _watchListCount = new BehaviorSubject<number>(this.watchListLength());
  watchListCount$ = this._watchListCount.asObservable();

  private _watchList = new BehaviorSubject<any>([]);
  watchList$ = this._watchList.asObservable();

  getLocalCart() {
    const cart = localStorage.getItem('watchList');
    const watchList: number[] = cart ? JSON.parse(cart) : [];
    return watchList;
  }
  watchListLength() {
    return this.getLocalCart().length;
  }

  saveWatchList(id: number) {
    const storedWatchList = this.getLocalCart();
    const watchList: number[] = storedWatchList;
    const index = watchList.findIndex((item) => {
      return item == id;
    });
    if (index == -1) {
      watchList.push(id);
    }
    localStorage.setItem('watchList', JSON.stringify(watchList));
    this._watchListCount.next(watchList.length);
  }

  onWatchListRemoveItem(id: number) {
    const storedWatchList = this.getLocalCart();
    const watchList: number[] = storedWatchList;
    const index = watchList.findIndex((item) => {
      return item == id;
    });
    if (index !== -1) {
      watchList.splice(index, 1);
    }
    localStorage.setItem('watchList', JSON.stringify(watchList));
    this.getWatchList();
    this._watchListCount.next(watchList.length);
  }

  getWatchList() {}
}
