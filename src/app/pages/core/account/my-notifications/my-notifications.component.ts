import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/shared/services/title/title.service';

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
export class MyNotificationsComponent implements OnInit {
  constructor(private router: Router, private titleSerice: TitleService) {}
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
  ngOnInit(): void {
    this.titleSerice.changeTitle('Notifications');
  }
  navgateToAccount() {
    this.router.navigate(['account']);
  }
}
