import { Component, Input,  } from '@angular/core';
import { IProducts } from '../../types/product.type';
import { CartService } from 'src/app/pages/core/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() dropdownItems!: IProducts[];
  constructor(private cartService: CartService, private route: Router) {}

  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  navigateProduct(id: number) {
    this.route.navigate(['/product', id]);
  }
}
