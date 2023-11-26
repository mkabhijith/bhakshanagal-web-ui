import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICountry, orginCountry } from '../types/contry-orgin.type';
import { ILanguage, SupportedLanguage } from '../types/language.type';
import { LanguageService } from './language.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryOrginService {

  constructor(private http: HttpClient, private languageService: LanguageService) { }

  languagesArray: ILanguage[] = this.languageService.getAllLanguages()

  private country: ICountry[] = [
    {
      id: orginCountry.INDIA,
      name: 'India',
      currency: 'INR',
      flag: '/assets/images/flag/in.svg',
      exchangeRate: 1,
      languages: [this.languagesArray[0],this.languagesArray[2],this.languagesArray[3]]
    },
    {
      id: orginCountry.UAE,
      name: 'UAE',
      currency: 'AED',
      flag: '/assets/images/flag/UAE.svg',
      exchangeRate: 22.69,
      languages: [this.languagesArray[0],this.languagesArray[1]]
    },
    {
      id: orginCountry.UK,
      name: 'UK',
      currency: 'GBP',
      flag: '/assets/images/flag/Great Britain.svg',
      exchangeRate: 104.56,
      languages: [this.languagesArray[0]]
    },
    {
      id: orginCountry.USA,
      name: 'USA',
      currency: 'USD',
      flag: '/assets/images/flag/USA.svg',
      exchangeRate: 83.34,
      languages: [this.languagesArray[0]]
    },
    {
      id: orginCountry.AUSTRALIA,
      name: 'AUSTRALIA',
      currency: 'AUD',
      flag: '/assets/images/flag/Australia.svg',
      exchangeRate: 54.74,
      languages: [this.languagesArray[0]]
    },
  ]

  private currentCountry = this.country[0];
  private _CountryChange = new BehaviorSubject(this.currentCountry);
  switchCountry$ = this._CountryChange.asObservable();



  getAllCountry() {
    return this.country;
  }

  getcurrencydata(country1: string) {
    // const url = `${environment.apiUrl}/{latest?base=USD'+ country1}`
    const url = `https://v6.exchangerate-api.com/v6/1c7c53b7135da7f380f9e17d/latest/USD`
    // let url = 'https://api.exchangerate.host/latest?base=USD' + country1;
    return this.http.get(url).pipe()
  }

  private findCountry(countryId: orginCountry) {
    return this.country.find((country) => country.id === countryId);
  }

  changeCountryTo(country: orginCountry) {
    this.currentCountry = this.findCountry(country)!;
    this._CountryChange.next(this.currentCountry)
  }
}
