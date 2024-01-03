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

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.scss'],
})
export class CategoryProductListComponent implements OnInit, OnDestroy {
  @Input() dropdownItems!: IProducts[];
  constructor(
    private cartService: CartService,
    private route: Router,
    private languageService: LanguageService
  ) {}

  languageSubscription!: Subscription;
  currentLanguage!: ILanguage;
  limit!: number;
  intialLimit!: number;
  itemsToShow: IProducts[] = [];
  showMoreText = 'Show More';
  screenWidth!: number;
  isSmallScreen!: boolean;
  isMediumScreen!: boolean;
  isLargeScreen!: boolean;

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
      this.intialLimit = 4;
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
    document
      .querySelector('#custom-field-interface')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    event.preventDefault();
    this.limit =
      this.limit === this.dropdownItems.length
        ? this.intialLimit
        : this.dropdownItems.length;
    this.showMoreText =
      this.showMoreText === 'Show More' ? 'Show Less' : 'Show More';
    this.toggleItems();
  }

  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  navigateProduct(id: number) {
    this.route.navigate(['/product', id]);
  }
}
