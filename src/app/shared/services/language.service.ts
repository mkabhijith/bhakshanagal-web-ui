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
      name: 'English (EN)',
      ERHL: 'right',
      ELHR: 'left',
      translation: 'LANGUAGE.ENGLISH',
      direction: 'ltr',
      code: SupportedLanguageCode.ENGLISH,
      image:'/assets/images/origin/Tower Bridge London.jpeg'
    },
    {
      id: SupportedLanguage.ARABIC,
      name: 'Arabic (AR)',
      ERHL: 'left',
      ELHR: 'right',
      translation: 'LANGUAGE.ARABIC',
      direction: 'rtl',
      code: SupportedLanguageCode.ARABIC,
      image:'/assets/images/origin/Building.jpeg'
    },
    {
      id: SupportedLanguage.HINDI,
      name: 'Hindi (HI)',
      ERHL: 'right',
      ELHR: 'left',
      translation: 'LANGUAGE.HINDI',
      direction: 'ltr',
      code: SupportedLanguageCode.HINDI,
      image:'/assets/images/origin/Taj Mahal Magnet _ Taj-mahal.jpeg'
    },
    {
      id: SupportedLanguage.MALAYALAM,
      name: 'Malayalam (ML)',
      ERHL: 'right',
      ELHR: 'left',
      translation: 'LANGUAGE.MALAYALAM',
      direction: 'ltr',
      code: SupportedLanguageCode.MALAYALAM,
      image:'/assets/images/origin/Kerala in South India house boat in backwater vector.jpeg'
    },
    {
      id: SupportedLanguage.TAMIL,
      name: 'Tamil (TA)',
      ERHL: 'right',
      ELHR: 'left',
      translation: 'LANGUAGE.TAMIL',
      direction: 'ltr',
      code: SupportedLanguageCode.TAMIL,
      image:'/assets/images/origin/Chennai1.jpeg'
    },
  ];

  private currentLanguage = this.languages[0];
  private _langChange = new BehaviorSubject(this.currentLanguage);
  switchLanguage$ = this._langChange.asObservable();

  init() {

    this.translate.addLangs([
      SupportedLanguageCode.ENGLISH,
      SupportedLanguageCode.ARABIC,
      SupportedLanguageCode.HINDI,
      SupportedLanguageCode.MALAYALAM,
      SupportedLanguageCode.TAMIL
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
