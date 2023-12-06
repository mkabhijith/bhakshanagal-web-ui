import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { IcardType } from 'src/app/shared/types/card.type';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(private offerService: OffersService) {}
  offerList!: IcardType[];
  ngOnInit(): void {
    this.offerList = this.offerService.getOffer();
  }
}
