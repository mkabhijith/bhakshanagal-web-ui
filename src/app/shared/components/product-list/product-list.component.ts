import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducts } from '../../types/product.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() dropdownItems!:IProducts[];
  @Output() selectBuy = new EventEmitter<number>()

  selectBuyOption(id:number){
    this.selectBuy.emit(id)
  }
}
