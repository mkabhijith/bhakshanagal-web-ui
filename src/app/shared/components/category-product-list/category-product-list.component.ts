import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/pages/core/cart/cart.service';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
import { ILanguage } from '../../types/language.type';
import { IProducts } from '../../types/product.type';
import { IProductList, Iproduct } from 'src/app/pages/core/home/home.type';
import { WatchlistService } from 'src/app/pages/core/wishlist/watchlist.service';

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.scss'],
})
export class CategoryProductListComponent implements OnInit, OnDestroy {
  @Input() dropdownItems!: Iproduct[];
  @Input() intialCardCount !:any;
  constructor(
    private cartService: CartService,
    private route: Router,
    private languageService: LanguageService,
    private watchListService : WatchlistService
  ) {}

  languageSubscription!: Subscription;
  currentLanguage!: ILanguage;
  limit!: number;
  intialLimit!: number;
  itemsToShow: Iproduct[] = [];
  showMoreText = 'HOME.SHOW_MORE';
  screenWidth!: number;
  isSmallScreen!: boolean;
  isMediumScreen!: boolean;
  isLargeScreen!: boolean;
  value = 5;
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });

    this.screenWidth = window.innerWidth;
    this.setLimit();
    this.toggleItems();
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  setLimit() {
    this.isSmallScreen = this.screenWidth < 600;
    this.isMediumScreen = this.screenWidth >= 600 && this.screenWidth < 1210;
    this.isLargeScreen = this.screenWidth >= 1210;
    if (this.isLargeScreen) {
      this.intialLimit = this.intialCardCount;
      this.limit = this.intialLimit;
    } else if (this.isMediumScreen) {
      this.intialLimit = 3;
      this.limit = this.intialLimit;
    } else if (this.isSmallScreen) {
      this.intialLimit = 1;
      this.limit = this.intialLimit;
    }
  }

  toggleItems() {
    this.itemsToShow = this.dropdownItems.slice(0, this.limit);
  }
  toggleShowMore(event: Event) {
    // document
    //   .querySelector('#custom-field-interface')
    //   ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    event.preventDefault();
    this.limit =
      this.limit === this.dropdownItems.length
        ? this.intialLimit
        : this.dropdownItems.length;
    this.showMoreText =
      this.showMoreText === 'HOME.SHOW_MORE' ? 'HOME.SHOW_LESS' : 'View All Products';
    this.toggleItems();
  }

  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  navigateProduct(id: number) {
    console.log('sjsj');
    
    this.route.navigate(['/product', id]);
  }
  addToWatchList(id: number) {
    this.watchListService.saveWatchList(id);
  }
}
