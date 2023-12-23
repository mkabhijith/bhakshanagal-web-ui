import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { IcardType } from 'src/app/shared/types/card.type';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(
    private offerService: OffersService,
    private titleSerice: TitleService
  ) {}
  offerList!: IcardType[];
  ngOnInit(): void {
    this.titleSerice.changeTitle('offers');
    this.offerList = this.offerService.getOffer();
  }
}
