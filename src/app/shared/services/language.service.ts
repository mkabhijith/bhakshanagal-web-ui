import { Injectable } from '@angular/core';
import { SupportedLanguage, SupportedLanguageCode, ILanguage } from '../types/language.type'
import { StorageService } from './storage/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private storageService: StorageService, private translate: TranslateService) {
    this.init
  }
  private languages: ILanguage[] = [
    {
      id: SupportedLanguage.ENGLISH,
      name: 'English',
      flag: 'assets/images/flag/flag-en-new.svg',
      ERHL: 'right',
      ELHR: 'left',
      translation: 'LANGUAGE.ENGLISH',
      direction: 'ltr',
      currency:'INR',
      code: SupportedLanguageCode.ENGLISH,
    },
    {
      id: SupportedLanguage.HEBREW,
      name: 'Hebrew',
      flag: 'assets/images/flag/flag-he-new.svg',
      ERHL: 'left',
      ELHR: 'right',
      translation: 'LANGUAGE.HEBREW',
      direction: 'rtl',
      currency:'EUR',
      code: SupportedLanguageCode.HEBREW,
    },
    {
      id: SupportedLanguage.ARABIC,
      name: 'Arabic',
      flag: 'assets/images/flag/flag-ar-new.svg',
      ERHL: 'left',
      ELHR: 'right',
      translation: 'LANGUAGE.ARABIC',
      direction: 'rtl',
      currency:'AED',
      code: SupportedLanguageCode.ARABIC,
    },

  ];

  private currentLanguage = this.languages[0];
  private _langChange = new BehaviorSubject(this.currentLanguage);
  switchLanguage$ = this._langChange.asObservable();

  init() {
    // const lastUsedLanguageId = this.storageService.languageId;

    // switch (lastUsedLanguageId) {
    //   case SupportedLanguage.ENGLISH:
    //   case SupportedLanguage.HEBREW:
    //     this.currentLanguage = this.findLanguage(lastUsedLanguageId)!;
    //     this.setLanguage(lastUsedLanguageId);
    //     break;

    //   default:
    //     this.currentLanguage = this.languages[1];
    //     this.setLanguage(SupportedLanguage.HEBREW);
    //     break;
    // }

    this.translate.addLangs([
      SupportedLanguageCode.HEBREW,
      SupportedLanguageCode.ENGLISH,
      SupportedLanguageCode.ARABIC,
    ]);
    console.log('service', this.currentLanguage);

    this.translate.setDefaultLang(this.currentLanguage.code);
    this._langChange.next(this.currentLanguage);
  }

  private findLanguage(lang: SupportedLanguage) {
    return this.languages.find((language) => language.id === lang);
  }

  changeLanguageTo(lang: SupportedLanguage) {
    this.currentLanguage = this.findLanguage(lang)!;
    this.setLanguage(lang);
    this._langChange.next(this.currentLanguage);
  }
  getAllLanguages() {
    return this.languages;
  }

  private setLanguage(lang: SupportedLanguage) {
    this.storageService.languageId = lang;
    this.currentLanguage = this.findLanguage(lang)!;
    this.translate.use(this.currentLanguage.code);
  }
}
