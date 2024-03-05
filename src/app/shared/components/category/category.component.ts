import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoryList = [
    {
      title: 'Veg',
      image: 'assets/images/category-demo.svg',
    },
    {
      title: 'Non Veg',
      image: 'assets/images/category-demo.svg',
    },
  ];
}
