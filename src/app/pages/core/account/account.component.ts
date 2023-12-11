import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
export class AccountComponent implements OnInit {
  constructor(private router: Router) {}
  accountMenu: IaccountMenu[] = [
    {
      id: 1,
      title: 'ACCOUNT SETTINGS',
      icon: 'pi pi-spin pi-cog',
      options: [
        {
          id: 0,
          title: 'Profile information',
          route: 'profile',
        },
        {
          id: 1,
          title: 'Manage Addresses',
          route: 'address',
        },
      ],
    },

    {
      id: 3,
      title: 'MY HOLDINGS',
      icon: 'pi pi-wallet',
      options: [
        {
          id: 0,
          title: 'My cart',
          route: '/cart',
        },
        {
          id: 1,
          title: 'MY ORDERS',
          route: '/orders',
        },
        {
          id: 2,
          title: 'MY Notifications',
          route: 'notifications',
        },
        {
          id: 2,
          title: 'My review & rating',
          route: 'reviews',
        },
      ],
    },
  ];

  ngOnInit(): void {}
  find(r: any) {
    console.log(r);
    // this.router.navigate(['/orders']);
  }
}
