import { Injectable } from '@angular/core';

import { ICountry, orginCountry } from '../types/contry-orgin.type';
import { ILanguage } from '../types/language.type';
import { LanguageService } from './language.service';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CountryOrginService {
  constructor(
    private languageService: LanguageService,
    private storageService: StorageService
  ) {}

  languagesArray: ILanguage[] = this.languageService.getAllLanguages();

  private country: ICountry[] = [
    {
      id: orginCountry.INDIA,
      name: 'India',
      currency: 'INR',
      flag: '/assets/images/flag/in.svg',
      exchangeRate: 1,
      languages: [
        this.languagesArray[0],
        this.languagesArray[2],
        this.languagesArray[3],
        this.languagesArray[4],
      ],
    },
    {
      id: orginCountry.UAE,
      name: 'UAE',
      currency: 'AED',
      flag: '/assets/images/flag/UAE.svg',
      exchangeRate: 22.69,
      languages: [this.languagesArray[0], this.languagesArray[1]],
    },
    {
      id: orginCountry.UK,
      name: 'UK',
      currency: 'GBP',
      flag: '/assets/images/flag/Great Britain.svg',
      exchangeRate: 104.56,
      languages: [this.languagesArray[0]],
    },
    {
      id: orginCountry.USA,
      name: 'USA',
      currency: 'USD',
      flag: '/assets/images/flag/USA.svg',
      exchangeRate: 83.34,
      languages: [this.languagesArray[0]],
    },
    {
      id: orginCountry.AUSTRALIA,
      name: 'AUSTRALIA',
      currency: 'AUD',
      flag: '/assets/images/flag/Australia.svg',
      exchangeRate: 54.74,
      languages: [this.languagesArray[0]],
    },
  ];

  private currentCountry = this.country[0];
  private _CountryChange = new BehaviorSubject(this.currentCountry);
  switchCountry$ = this._CountryChange.asObservable();

  getAllCountry() {
    return this.country;
  }

  private findCountry(countryId: orginCountry) {
    return this.country.find((country) => country.id === countryId);
  }
  init() {
    const lastUsedCountryId = this.storageService.countryId;
    this.currentCountry = this.country[0];
    if (lastUsedCountryId) {
      this.currentCountry = this.findCountry(lastUsedCountryId)!;
    }
    this._CountryChange.next(this.currentCountry);
  }

  changeCountryTo(country: orginCountry) {
    this.currentCountry = this.findCountry(country)!;
    this.setCountry(country);
    this._CountryChange.next(this.currentCountry);
    this.languageService.changeLanguageTo(this.currentCountry.languages[0].id);
  }

  private setCountry(country: orginCountry) {
    this.storageService.countryId = country;
  }
}
