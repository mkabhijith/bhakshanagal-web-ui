import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';

export interface Ioffer {
  offer_name: string;
  offer_description: string;
  offer_image: string | any;
  offer_status: string;
  offer_created_at: string;
  offer_start_date: string;
  offer_end_date: string;
  product: [
    {
      product_id: number;
      product_name: string;
      price: number;
      quantity: number;
      image_file: null | any;
    }
  ];
}
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(private offersService: OffersService) {}
  Offers: Ioffer[] = [];
  ngOnInit(): void {
    this.offersService.offersList().subscribe({
      next: (res) => {
        this.Offers = res.data;
      },
    });
  }
}
