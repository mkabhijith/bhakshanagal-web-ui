import { Injectable } from '@angular/core';
import { SupportedLanguage } from '../../types/language.type';

import { CookieService } from 'ngx-cookie-service';
import { STORAGE_KEYS } from '../../constants/storage-key';
interface IAuthKeySetter {
  authKey: string;
}
const { AUTH_KEY } = STORAGE_KEYS;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private cookieService: CookieService
  ) {}


  set languageId(id: SupportedLanguage) {
    // localStorage.setItem(LANGUAGE_ID, id.toString());
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
}
