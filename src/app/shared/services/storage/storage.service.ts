import { Injectable } from '@angular/core';
import { SupportedLanguage } from '../../types/language.type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  set languageId(id: SupportedLanguage) {
    // localStorage.setItem(LANGUAGE_ID, id.toString());
  }
}
