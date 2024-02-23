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
      name: 'Manage My Account',
      icon: '/assets/images/user.svg',
      route: 'account',
    },
    {
      id: 1,
      name: 'My Order',
      icon: '/assets/images/icon-mallbag.png',
      route: 'orders',
    },
    {
      id: 2,
      name: 'Notification',
      icon: '/assets/images/notification.svg',
      route: 'orders',
    },
    {
      id: 3,
      name: 'Whishlist',
      icon: '/assets/images/Icon-Reviews.svg',
      route: 'orders',
    }, {
      id: 4,
      name: 'Offer Zone',
      icon: '/assets/images/icon-mallbag.png',
      route: 'orders',
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
