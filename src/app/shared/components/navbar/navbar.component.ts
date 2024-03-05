import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LanguageService } from '../../services/language.service';

import { ILanguage } from '../../types/language.type';

import { CartService } from 'src/app/pages/core/cart/cart.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

import { Subscription, debounceTime } from 'rxjs';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { WatchlistService } from 'src/app/pages/core/wishlist/watchlist.service';

type INavBar = {
  id: number;
  title: string;
  icon?: string;
  route: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(
    private languageService: LanguageService,
    private cartService: CartService,
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private storageService: StorageService,
    private route: Router,
    private watchListService: WatchlistService
  ) {}

  languageSubscription!: Subscription;
  localCartSubscription!: Subscription;
  sidebarSubscription!: Subscription;
  watchListLengthSubscription!: Subscription;

  currentLanguage!: ILanguage;
  triggerSliderVisible = 0;
  isNavbarFixed = false;
  searchTerm!: string;
  cartCount: any = 0;
  onAuthorise: boolean = false;
  watchListCount: number =0;
  linksForNavbar: INavBar[] = [
    {
      id: 0,
      title: 'MENU.HOME',
      route: 'cart',
      icon: '/assets/images/cart.svg',
    },

    {
      id: 2,
      title: 'love',
      route: 'orders',
      icon: '/assets/images/love.svg',
    },
  ];

  form = new FormGroup({
    searchTerm: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.storageService.authKey) {
      this.onAuthorise = true;
    }
    this.searchTermControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((res) => {
        console.log('debounce time ', res);
      });

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (res) => {
        this.currentLanguage = res;
      },
    });
    this.cartService.getCart();
    this.localCartSubscription = this.cartService.cartCoun$.subscribe({
      next: (count) => {
        this.cartCount = count;
      },
    });

    this.sidebarSubscription =
      this.sidebarService.switchSidebarVisible$.subscribe({
        next: (res) => {
          this.isNavbarFixed = res;
          this.cdr.detectChanges();
        },
      });
    this.watchListLengthSubscription =
      this.watchListService.watchListCount$.subscribe({
        next: (res) => {
          this.watchListCount = res;
        },
      });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
    this.localCartSubscription.unsubscribe();
    this.sidebarSubscription.unsubscribe();
    this.watchListLengthSubscription.unsubscribe();
  }
  get searchTermControl() {
    return this.form.controls['searchTerm'];
  }
  sidebarVisible() {
    this.triggerSliderVisible += 1;
  }
  logIn() {
    this.route.navigateByUrl('/signin');
  }
  logOut() {
    this.storageService.clearData();
    this.onAuthorise = false;
    this.route.navigateByUrl('/home');
  }
}
