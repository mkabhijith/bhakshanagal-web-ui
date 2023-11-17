import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ILanguage } from '../../types/language.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  constructor(private languageService: LanguageService) { }
  languages!: ILanguage[];
  currentLanguage!: ILanguage;

  languageSubscription!: Subscription;
  ngOnInit(): void {
    this.languages = this.languageService.getAllLanguages();
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (res) => {
        this.currentLanguage = res;
      },
    });
    console.log('language', this.languages);
    this.languageService.changeLanguageTo(this.languages[2].id);
    console.log(this.currentLanguage);

  }



}
