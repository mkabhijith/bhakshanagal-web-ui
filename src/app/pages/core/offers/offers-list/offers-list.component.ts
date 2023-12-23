import { Component, OnInit } from '@angular/core';

import { IProducts } from 'src/app/shared/types/product.type';
import { HomeService } from '../../home/home.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private titleSerice: TitleService,
    private route: ActivatedRoute
  ) {}
  list!: IProducts[];

  ngOnInit(): void {
    this.titleSerice.changeTitle('offerList')
    this.list = this.homeService.getList();
    window.scrollTo(0, 0);
    this.route.params.subscribe({
      next:(params) =>{
        
      }
    })
  }
}
