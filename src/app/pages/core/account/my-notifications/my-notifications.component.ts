import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Inotification = {
  id: number;
  image: string;
  details: string;
  date: string;
};
@Component({
  selector: 'app-my-notifications',
  templateUrl: './my-notifications.component.html',
  styleUrls: ['./my-notifications.component.scss'],
})
export class MyNotificationsComponent {
  constructor(private router:Router){}
  notificationList: Inotification[] = [
    {
      id: 0,
      image: '/assets/images/food/Free Vector _ Brunch banner template.jpg',
      details: 'Offer Notification',
      date: '11/Dec/2023',
    },
    {
      id: 1,
      image: '/assets/images/food/Free Vector _ Brunch banner template.jpg',

      details: 'Offer Notification 2',
      date: '12/Dec/2023',
    },
  ];
  navgateToAccount() {
    this.router.navigate(['account']);
  }
}
