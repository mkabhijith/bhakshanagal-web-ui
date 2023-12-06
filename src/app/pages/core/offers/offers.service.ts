import { Injectable } from '@angular/core';
import { IcardType } from 'src/app/shared/types/card.type';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor() {}
  offersList: IcardType[] = [
    {
      id: 0,
      image:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      name: 'aadi sale',
    },
    {
      id: 1,
      image:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      name: 'kerala sale',
    },
    {
      id: 2,
      image:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      name: 'big sale',
    },
    {
      id: 2,
      image: '/assets/images/food/Free Vector _ Brunch banner template.jpg',
      name: 'onam  Offer',
    },
  ];
  getOffer() {
    return this.offersList;
  }
}
