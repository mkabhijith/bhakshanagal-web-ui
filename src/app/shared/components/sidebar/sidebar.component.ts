import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { Subscription } from 'rxjs';
import { ILanguage } from '../../types/language.type';
import { LanguageService } from '../../services/language.service';

type ISidebar = {
  category: IsiddBarOptionValue[];
  Orgin: IsiddBarOptionValue[];
  offer: IsiddBarOptionValue[];
  account: IsiddBarOptionValue[];
  service: IsiddBarOptionValue[];
};
type IsiddBarOptionValue = {
  id: number;
  title: string;
  route: string;
  icon: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  constructor(
    private route: Router,
    private sidebarService: SidebarService,
    private LanguageService: LanguageService
  ) {}
  languageSubscription!: Subscription;
  currentLanguage!: ILanguage;
  @Input()
  set triggerUpdate(value: number) {
    if (value !== 0) {
      this.sidebarVisible = true;
      this.sidebarService.changeSidebarVisible(true);
    }
  }

  sideOptions: ISidebar[] = [
    {
      category: [
        {
          id: 0,
          title: 'SIDE_BAR.ALL_CATEGORIES',
          route: 'categorys',
          icon: 'pi pi-th-large',
        },
      ],
      Orgin: [
        {
          id: 0,
          title: 'SIDE_BAR.CHOOSE_LANGUAGE',
          route: 'origin/language',
          icon: 'pi pi-language',
        },
        {
          id: 1,
          title: 'SIDE_BAR.CHOOSE_COUNTRY',
          route: 'origin/country',
          icon: 'pi pi-globe',
        },
      ],
      offer: [
        {
          id: 0,
          title: 'SIDE_BAR.OFFER_ZONE',
          route: 'offers',
          icon: 'pi pi-money-bill',
        },
      ],
      account: [
        {
          id: 0,
          title: 'ACCOUNT.MY_ORDERS',
          route: 'orders',
          icon: 'pi pi-truck',
        },
        {
          id: 1,
          title: 'ACCOUNT.MY_CART',
          route: 'cart',
          icon: 'pi pi-shopping-cart',
        },
        {
          id: 2,
          title: 'SIDE_BAR.MY_ACCOUNT',
          route: 'account',
          icon: 'pi pi-user',
        },
      ],
      service: [
        {
          id: 0,
          title: 'SIDE_BAR.HELP',
          route: 'help',
          icon: '',
        },
        {
          id: 1,
          title: 'SIDE_BAR.ABOUT_US',
          route: 'about',
          icon: '',
        },
        {
          id: 2,
          title: 'SIDE_BAR.CONTACT_US',
          route: 'contact',
          icon: '',
        },
      ],
    },
  ];
  sidebarVisible: boolean = false;
  ngOnInit(): void {
    this.languageSubscription = this.LanguageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  sideBarOptionSelect(path: string) {
    this.route.navigate([path]);
    this.sidebarVisible = false;
    this.sidebarService.changeSidebarVisible(false);
  }
  onSidebarHide() {
    this.sidebarService.changeSidebarVisible(false);
  }
  onTrue() {
    this.sidebarService.changeSidebarVisible(true);
  }
}
