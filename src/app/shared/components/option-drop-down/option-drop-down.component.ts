import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/pages/core/account/address/address.service';

@Component({
  selector: 'app-option-drop-down',
  templateUrl: './option-drop-down.component.html',
  styleUrls: ['./option-drop-down.component.scss'],
})
export class OptionDropDownComponent {
  constructor(private router: Router, private addresService: AddressService) {}
  @Input() id!: any;
  @Input() set triggerClick(value: number) {
    if (value !== 0) {
      this.onDropdown();
    }
  }
  @Output() cardEvent = new EventEmitter<boolean>();
  items = [
    {
      id: 0,
      name: 'Edit',
    },
    {
      id: 1,
      name: 'Delete',
    },
  ];
  show = false;
  onDropdown() {
    console.log('clicked');
    
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }
  onEditAddress(id: number) {
    this.router.navigate(['account/addAddress', id]);
    this.onHideDropdown();
  }
  onDeleteAddress(id: number) {
    this.cardEvent.emit(true);
    this.addresService.removeAddress(id).subscribe({
      next: (res) => {
        this.cardEvent.emit(false);
      },
    });
    this.onHideDropdown();
  }
  onSetActiveAddress(id: number) {
    this.addresService.setAddress(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
