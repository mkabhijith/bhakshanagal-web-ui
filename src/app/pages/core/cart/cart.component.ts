import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(
    private cartService: CartService,
    private languageService: LanguageService,
    private titleSerice: TitleService
  ) {}

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  cartListSubscription!: Subscription;
  cartList: any[] = [];
  ngOnInit(): void {
    this.titleSerice.changeTitle('Cart')
    this.cartListSubscription = this.cartService.cartList$.subscribe({
      next: (res) => {
        this.cartList = res;
      },
    });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.cartListSubscription.unsubscribe();
    this.languageSubscription.unsubscribe();
  }

  onItemRemove(id: number) {
    this.cartService.onCartRemoveItem(id);
  }
}
