import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private cartService: CartService
  ) {}
  list!: any[];
  product: any;
  ngOnInit() {
    this.list = this.homeService.getList();
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.product = this.list.find((item) => item.id == id);
        // console.log('product', this.list.find((item) => item.id == id));
      },
    });
    window.scrollTo(0, 0);
  }
  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
}
