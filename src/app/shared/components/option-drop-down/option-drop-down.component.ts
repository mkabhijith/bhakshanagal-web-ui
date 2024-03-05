import { Component, Input } from '@angular/core';
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
    this.addresService.removeAddress(id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    this.onHideDropdown();
  }
}
