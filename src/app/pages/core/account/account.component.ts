import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

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
    private languageService: LanguageService,
    private storageService: StorageService
  ) {}

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  accountMenu: IaccountMenu[] = [
    {
      id: 1,
      title: 'ACCOUNTS.MANAGE_ACC',
      icon: 'pi pi-spin pi-cog',
      options: [
        {
          id: 0,
          title: 'ACCOUNTS.MY_PROFILE',
          route: 'profile',
        },
        {
          id: 1,
          title: 'ACCOUNTS.ADD_BOOK',
          route: 'address',
        },
      ],
    },

    {
      id: 2,
      title: 'ACCOUNT.MY_ORDERS',
      icon: 'pi pi-wallet',
      options: [
        {
          id: 0,
          title: 'MENU.ORDERS',
          route: 'orders',
        },
        {
          id: 1,
          title: 'ACCOUNTS.MY_RETURNS',
          route: 'return',
        },
        {
          id: 2,
          title: 'ACCOUNTS.MY_CANCELATION',
          route: 'cancel-list',
        },
        {
          id: 2,
          title: 'ACCOUNT.MY_NOTIFICATION',
          route: 'notifications',
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.titleSerice.changeTitle('Account');
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
  logOut() {
    this.storageService.clearData();
    this.router.navigateByUrl('/home');
  }
}
