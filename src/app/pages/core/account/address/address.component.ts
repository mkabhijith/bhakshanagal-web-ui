import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from './address.service';
import { ILanguage } from 'src/app/shared/types/language.type';

import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { IAddress } from './address.type';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private addService: AddressService,
    private router: Router,
    private languageService: LanguageService,
    private titleSerice: TitleService,

  ) {}
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  triggerClick = 0;
  addreesListSubscription!: Subscription;
  loginInProgress: boolean = false;
  addressList!: IAddress[];
  demo = [{ id: 1 }, { id: 0 }];
  show =false
  ngOnInit(): void {
    this.titleSerice.changeTitle('Address');

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.getAddressList();
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  getAddressList() {
    this.loginInProgress = true;
    this.addService.getAddressList().subscribe({
      next: (res) => {
        this.loginInProgress = false;
        this.addressList = res.list;
      },
    });
  }

  deleteAddress(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to cancel order?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.loginInProgress = true;
        this.addService.removeAddress(id).subscribe({
          next: (res) => {
            this.loginInProgress = false;
            if (res.result) {
              this.messageService.add({
                severity: 'info',
                summary: 'Confirmed',
                detail: 'You have accepted',
              });
            }
          },
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
  onEditAddress(id: number) {
 
    this.router.navigate(['account/addAddress', id]);
  }
  onEditAddressMobile(id: number) {
    console.log('addAddress');

    this.router.navigate(['/addAddress', id]);
  }

  navgateToAccount() {
    this.router.navigate(['account']);
  }
  navigateToAddAddress() {
    this.router.navigate(['account/addAddress']);
  }
  navigateToAddAddressMobile() {
    this.router.navigate(['/addAddress']);
  }
  onDelete(e: boolean) {
    console.log('ee');

    this.loginInProgress = e;
    this.getAddressList();
  }

  onClick() {
    console.log('onclick');
    this.triggerClick += 1;
  }
  onDropdown() {
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }
  // onEditAddress(id: number) {
  //   this.router.navigate(['account/addAddress', id]);
  //   this.onHideDropdown();
  // }
  onDeleteAddress(id: number) {
    // this.cardEvent.emit(true);
    this.addService.removeAddress(id).subscribe({
      next: (res) => {
        // this.cardEvent.emit(false);
      },
    });
    this.onHideDropdown();
  }
  onSetActiveAddress(id: number) {
    this.addService.setAddress(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
