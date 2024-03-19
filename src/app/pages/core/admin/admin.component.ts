import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';

type IAdminMenu = {
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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private titleSerice: TitleService,
    private languageService: LanguageService,
    private storageService: StorageService
  ) {}
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  admintMenu: IAdminMenu[] = [
    {
      id: 0,
      icon: '/assets/images/image 2.svg',
      title: 'Dashboard',
      route: '/admin/dashboard',
    },
    {
      id: 1,
      icon: '/assets/images/image 4.svg',
      title: 'Users',
      route: '/admin/users',
    },
    {
      id: 2,
      icon: '/assets/images/image 5.svg',
      title: 'Products',
      route: '/admin/products',
    },
    {
      id: 3,
      icon: '/assets/images/Cart1 with buy.svg',
      title: 'Orders',
      route: '/admin/orderList',
    },
    {
      id: 4,
      icon: '/assets/images/image 6.svg',
      title: 'Offers',
      route: '/admin/offersList',
    },
    {
      id: 5,
      icon: '/assets/images/image 8.svg',
      title: 'Payments',
      route: '/admin/paymentList',
    },

    {
      id: 5,
      icon: '/assets/images/image 8.svg',
      title: 'Coupon',
      route: '/admin/coupon',
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
