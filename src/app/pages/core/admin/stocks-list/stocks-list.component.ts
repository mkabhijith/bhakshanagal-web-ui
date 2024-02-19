import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home/home.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss'],
})
export class StocksListComponent implements OnInit {
  products: any[] = [];
  constructor(private homeService: HomeService) {}
  updateStockForm = new FormGroup<any>({});
  ngOnInit(): void {
    this.products = this.homeService.getList();
  }
  onUpdateProduct(id: number) {}
}
