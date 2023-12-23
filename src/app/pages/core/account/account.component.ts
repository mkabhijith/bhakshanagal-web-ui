import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';

type IaccountMenu = {
  id: number;
  title: string;
  icon: string;
  options?: IOptions[];
  route?: string;
};

type IOptions = {
  id: number;
  title: string;
  route: string;
};

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private titleSerice: TitleService,
    private languageService: LanguageService
  ) {}

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  accountMenu: IaccountMenu[] = [
    {
      id: 1,
      title: 'ACCOUNT.ACC_SETTING',
      icon: 'pi pi-spin pi-cog',
      options: [
        {
          id: 0,
          title: 'ACCOUNT.PROFILE_INFORMATION',
          route: 'profile',
        },
        {
          id: 1,
          title: 'ACCOUNT.MANAGE_ADDRESS',
          route: 'address',
        },
      ],
    },

    {
      id: 3,
      title: 'ACCOUNT.MY_HOLDINGS',
      icon: 'pi pi-wallet',
      options: [
        {
          id: 0,
          title: 'ACCOUNT.MY_CART',
          route: '/cart',
        },
        {
          id: 1,
          title: 'ACCOUNT.MY_ORDERS',
          route: '/orders',
        },
        {
          id: 2,
          title: 'ACCOUNT.MY_NOTIFICATION',
          route: 'notifications',
        },
        {
          id: 2,
          title: 'ACCOUNT.MY_REVIEW_RATING',
          route: 'reviews',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.titleSerice.changeTitle('Account')
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  navigation(route: string) {
    this.router.navigate([route]);
  }
}
