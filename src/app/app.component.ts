import { Component } from '@angular/core';

import { LanguageService } from './shared/services/language.service';
import { CountryOrginService } from './shared/services/country-orgin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public languageService: LanguageService,
    private countryService: CountryOrginService
  ) {
    this.languageService.init();
    this.countryService.init();
  }
}
