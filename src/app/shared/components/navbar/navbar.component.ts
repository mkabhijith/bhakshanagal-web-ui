import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LanguageService } from '../../services/language.service';

import { ILanguage } from '../../types/language.type';

import { CartService } from 'src/app/pages/core/cart/cart.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

import { Subscription, debounceTime } from 'rxjs';

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
    private cdr: ChangeDetectorRef
  ) {}

  languageSubscription!: Subscription;
  localCartSubscription!: Subscription;
  sidebarSubscription!: Subscription;

  currentLanguage!: ILanguage;
  triggerSliderVisible = 0;
  isNavbarFixed = false;
  searchTerm!: string;
  values: any = 0;

  linksForNavbar: INavBar[] = [
    {
      id: 0,
      title: 'NAVBAR.HOME',
      route: 'home',
    },

    {
      id: 2,
      title: 'Orders',
      route: 'orders',
    },
  ];

  form = new FormGroup({
    searchTerm: new FormControl(''),
  });

  ngOnInit(): void {
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
        this.values = count;
      },
    });

    this.sidebarSubscription =
      this.sidebarService.switchSidebarVisible$.subscribe({
        next: (res) => {
          this.isNavbarFixed = res;
          this.cdr.detectChanges();
        },
      });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
    this.localCartSubscription.unsubscribe();
    this.sidebarSubscription.unsubscribe();
  }
  get searchTermControl() {
    return this.form.controls['searchTerm'];
  }
  sidebarVisible() {
    this.triggerSliderVisible += 1;
  }
}
