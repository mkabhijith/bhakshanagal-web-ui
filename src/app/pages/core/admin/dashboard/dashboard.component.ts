import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products !:any [];
  topSelling :any[] =[]
  constructor(private dashBoardService: DashboardService) {}
  ngOnInit(): void {
    this.dashBoardService.getDashboardDetials().subscribe({
      next: (res) => {
        console.log(res);
        this.products = Object.keys(res.product_details).map(key => ({
          [key]: res.product_details[key]
        }))
        console.log(this.products);
        this.topSelling =res.topselling
      },
    });
  }
}
