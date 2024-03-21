import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  constructor(private route: Router) {}
  @Input() cardItems: any[] = [];
  items: any[] = [];
  ngOnInit(): void {
    // this.items =
    this.items= this.cardItems
    // if (this.cardItems.length != 0) {
    //   this.items = this.cardItems.map((item) => {
    //     if (item.image_file !== null) {
    //       item.image_file =
    //         'https://srv442800.hstgr.cloud:3000//' + item.image_file;
    //     }
    //     return item;
    //   });
    //   console.log(this.items);
    // }
    console.log(this.items);
  }
  orderDetails(item: any) {
    this.route.navigate(['account/orders/orderInfo', item]);
    // this.route.navigateByUrl('account/orderInfo')
  }
}
