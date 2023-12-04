import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home/home.service';
import { IProducts } from 'src/app/shared/types/product.type';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  list!: IProducts[];
  ngOnInit(): void {
   this.list= this.homeService.getList();
   window.scrollTo(0, 0);
  }
}
