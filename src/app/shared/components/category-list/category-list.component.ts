import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../types/product.type';
import { ILanguage } from '../../types/language.type';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  @Input() dropdownItems!: IProducts[];
  responsiveOptions: any[] | undefined;
  length!: number 

  currentLanguage!: ILanguage;
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1277px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '680px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  navigateProduct(id: number) {}
  addToCart(id: number) {}
}
