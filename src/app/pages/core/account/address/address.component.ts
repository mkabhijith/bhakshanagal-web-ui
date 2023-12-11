import { Component, OnInit } from '@angular/core';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AddressService } from './address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private addService:AddressService,
    private router: Router
  ) {}
  addressList!:any[]
  ngOnInit(): void {
   this.addressList= this.addService.getAddress()
  }
  confirm1() {
    console.log('clicked');

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
  onEditAddress(id:number) {
    console.log(id);
    
    this.router.navigate(['account/addAddress',id])
  }
}
