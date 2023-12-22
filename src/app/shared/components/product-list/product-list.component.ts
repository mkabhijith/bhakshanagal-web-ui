import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProducts } from '../../types/product.type';
import { CartService } from 'src/app/pages/core/cart/cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ILanguage } from '../../types/language.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() dropdownItems!: IProducts[];

  constructor(
    private cartService: CartService,
    private route: Router,
    private languageService: LanguageService
  ) {}
  languageSubscription!: Subscription;

  currentLanguage!: ILanguage;
  ngOnInit(): void {
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  navigateProduct(id: number) {
    this.route.navigate(['/product', id]);
  }
}
