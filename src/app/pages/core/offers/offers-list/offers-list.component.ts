import { Component, OnInit } from '@angular/core';

import { IProducts } from 'src/app/shared/types/product.type';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  list!: IProducts[];
  
  ngOnInit(): void {
    this.list = this.homeService.getList();
    window.scrollTo(0, 0);
  }
}
