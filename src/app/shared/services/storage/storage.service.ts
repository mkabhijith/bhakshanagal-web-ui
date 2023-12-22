import { Injectable } from '@angular/core';
import { SupportedLanguage } from '../../types/language.type';

import { CookieService } from 'ngx-cookie-service';
import { STORAGE_KEYS } from '../../constants/storage-key';
import { orginCountry } from '../../types/contry-orgin.type';
interface IAuthKeySetter {
  authKey: string;
}
const { AUTH_KEY, LANGUAGE_ID, COUNTRY_ID } = STORAGE_KEYS;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  set languageId(id: SupportedLanguage) {
    localStorage.setItem(LANGUAGE_ID, id.toString());
  }

  get languageId() {
    const lanId = localStorage.getItem(LANGUAGE_ID);
    const defaultLanguage = SupportedLanguage.ENGLISH;
    const supportedLanguages = [
      SupportedLanguage.ENGLISH,
      SupportedLanguage.ARABIC,
      SupportedLanguage.HINDI,
      SupportedLanguage.MALAYALAM,
      SupportedLanguage.TAMIL,
    ];
    let parsedLanId = defaultLanguage;
    if (lanId) {
      parsedLanId = parseInt(lanId);

      if (!supportedLanguages.includes(parsedLanId)) {
        parsedLanId = defaultLanguage;
        this.languageId = defaultLanguage;
      }
    }
    return parsedLanId;
  }

  saveAuthKey({ authKey }: IAuthKeySetter) {
    this.cookieService.set(AUTH_KEY, authKey);
  }

  clearData() {
    this.cookieService.deleteAll();
  }

  get authKey() {
    return this.cookieService.get(AUTH_KEY);
  }

  set countryId(country: orginCountry) {
    localStorage.setItem(COUNTRY_ID, country.toString());
  }

  get countryId() {
    const counteryId = localStorage.getItem(COUNTRY_ID);
    let cotryId = 0;
    if (counteryId) {
      cotryId = parseInt(counteryId);
    }
    return cotryId;
  }
}
