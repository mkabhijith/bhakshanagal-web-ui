import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ILanguage, SupportedLanguage } from '../../types/language.type';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  constructor(private languageService: LanguageService) { }
  show = false
  currentLanguage!: ILanguage;
  languageArray = this.languageService.getAllLanguages();
  ngOnInit(): void {
    this.languageService.switchLanguage$.subscribe((latestLanguage) => {
      this.currentLanguage = latestLanguage;
      console.log(latestLanguage);

    });
  }
  onDropdown() {
    this.show = !this.show;
  }
  onHideDropdown() {
    this.show = false;
  }
  onLanguageChange(lang: SupportedLanguage) {
    this.onHideDropdown();
    this.languageService.changeLanguageTo(lang);

  }
}
