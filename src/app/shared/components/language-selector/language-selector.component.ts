import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ILanguage, SupportedLanguage } from '../../types/language.type';
import { CountryOrginService } from '../../services/country-orgin.service';
import { ICountry, orginCountry } from '../../types/contry-orgin.type';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  constructor(private languageService: LanguageService,
    private countryOrginService: CountryOrginService) { }

  showLanguage = false;
  showCountry = false;

  currentCountry!: ICountry;
  currentLanguage!: ILanguage;

  countryArray: ICountry[] = this.countryOrginService.getAllCountry()

  ngOnInit(): void {

    this.languageService.switchLanguage$.subscribe((latestLanguage) => {
      this.currentLanguage = latestLanguage;


    });

    this.countryOrginService.switchCountry$.subscribe({
      next: (latestCountry) => {
        this.currentCountry = latestCountry;
        this.languageService.changeLanguageTo(this.currentCountry.languages[0].id)
      }
    });
  }

  onDropdown() {
    this.showLanguage = !this.showLanguage;
    this.showCountry = false;
  }

  onHideDropdown() {
    this.showLanguage = false;
    this.showCountry = false;
  }

  onLanguageChange(lang: SupportedLanguage) {
    this.onHideDropdown();
    this.languageService.changeLanguageTo(lang);

  }

  onCountryChange(country: orginCountry) {
    this.onHideDropdown();
    this.countryOrginService.changeCountryTo(country)
  }

  onCountryDropdown() {
    this.showCountry = !this.showCountry;
    this.showLanguage = false;
  }
}
