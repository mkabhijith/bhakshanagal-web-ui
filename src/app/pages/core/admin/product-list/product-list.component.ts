import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { AddressService } from '../../account/address/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(
    private homeService: HomeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private addService: AddressService,
    private router: Router,
  ) {}
  
  products: any[] = [];
  ngOnInit(): void {
  }
  ngOnDestroy(): void {}
  deleteProduct(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to cancel order?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
  onEditProduct(id: number) {}
}
