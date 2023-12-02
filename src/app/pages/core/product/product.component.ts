import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(private route: ActivatedRoute,
    private homeService: HomeService) { }
  list !: any[];
  product: any;
  ngOnInit() {
    this.list = this.homeService.getList()
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id']
        console.log('id', this.list);
        this.product = this.list.find((item) => item.id == id)
        // console.log('product', this.list.find((item) => item.id == id));
      }
    })
   
      window.scrollTo(0, 0);
   
  }
 



}
