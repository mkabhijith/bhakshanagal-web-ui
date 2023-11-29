import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { OrdersService } from './orders.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  constructor(
    private orderservice: OrdersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) 
  {}
  products: any[] = [];

  ngOnInit() {
    this.products = this.orderservice.returnOrderList();
  }
  confirm1() {
   
    this.confirmationService.confirm({
      message: 'Are you sure that you want to cancel order?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (type: any) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                  break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                  break;
          }
      }
    });
  }
}
