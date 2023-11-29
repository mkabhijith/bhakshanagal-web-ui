import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
export class ProfileComponent {
  constructor(private route: Router) {}
  show: boolean = false;

  profileActionArray: IprofileActionArray[] = [
    {
      id: 0,
      name: 'Account',
      icon: 'pi pi-user',
      route: 'account',
    },
    {
      id: 1,
      name: 'Orders',
      icon: 'pi pi-cart-plus',
      route: 'orders',
    },
  ];

  onDropdown() {
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }
  
  logOut() {
    localStorage.clear();
    this.route.navigateByUrl('/signin');
  }
}
