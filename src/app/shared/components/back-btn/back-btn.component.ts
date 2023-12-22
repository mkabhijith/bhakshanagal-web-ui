import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILanguage } from '../../types/language.type';

import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
})
export class BackBtnComponent implements OnInit, OnDestroy {
  constructor(private languageService: LanguageService) {}
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  ngOnInit(): void {
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe()
  }
}
