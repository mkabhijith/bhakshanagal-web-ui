import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../services/storage/storage.service';

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
export class ProfileComponent implements OnInit {
  constructor(private route: Router, private storageService: StorageService) {}
  show: boolean = false;
  onAuthorise: boolean = false;
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

  ngOnInit(): void {
    if (this.storageService.authKey) {
      this.onAuthorise = true;
    }
  }

  onDropdown() {
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }

  logOut() {
    this.storageService.clearData();
    this.onHideDropdown()
  }
  logIn() {
    this.route.navigateByUrl('/signin');
  }
}
