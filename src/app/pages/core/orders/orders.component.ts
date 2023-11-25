import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  constructor(private homeService: HomeService, private storageService:StorageService) {}
  products :any[]= [];
  events!: any[];
  
  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  public orderStatus = "Ready for Billing"
  ngOnInit() {
    this.products = this.homeService.getList()
    // this.storageService.getProducts().then((data) => (this.products = data.slice(0, 5)));
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
  }
}
