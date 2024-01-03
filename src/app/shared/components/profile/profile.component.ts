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
      name: 'MENU.ACCOUNT',
      icon: 'pi pi-user',
      route: 'account',
    },
    {
      id: 1,
      name: 'MENU.ORDERS',
      icon: 'pi pi-cart-plus',
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
