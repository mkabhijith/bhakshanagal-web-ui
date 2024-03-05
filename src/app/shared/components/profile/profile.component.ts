import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../services/storage/storage.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ILanguage } from '../../types/language.type';

type IprofileActionArray = {
  id: number;
  name: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(
    private route: Router,
    private storageService: StorageService,
    private languageService: LanguageService
  ) {}
  languageSubscription!: Subscription;

  show: boolean = false;
  onAuthorise: boolean = false;
  currentLanguage!: ILanguage;
  profileActionArray: IprofileActionArray[] = [
    {
      id: 0,
      name: 'ACCOUNTS.MANAGE_ACC',
      icon: '/assets/images/user.svg',
      route: 'account',
    },
    {
      id: 1,
      name: 'ACCOUNT.MY_ORDERS',
      icon: '/assets/images/icon-mallbag.png',
      route: 'account/orders',
    },
    {
      id: 2,
      name: 'ACCOUNT.MY_NOTIFICATION',
      icon: '/assets/images/notification.svg',
      route: 'account/notifications',
    },
    {
      id: 3,
      name: 'WISHLIST.WISHLIST',
      icon: '/assets/images/Icon-Reviews.svg',
      route: 'wishlist',
    }, {
      id: 4,
      name: 'SIDE_BAR.OFFER_ZONE',
      icon: '/assets/images/icon-mallbag.png',
      route: '',
    },
    
  ];

  ngOnInit(): void {
    if (this.storageService.authKey) {
      this.onAuthorise = true;
    }
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  onDropdown() {
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }

  logOut() {
    this.storageService.clearData();
    this.onHideDropdown();
    this.onAuthorise = false;
    this.route.navigateByUrl('/home');
  }
  logIn() {
    this.route.navigateByUrl('/signin');
  }
}
