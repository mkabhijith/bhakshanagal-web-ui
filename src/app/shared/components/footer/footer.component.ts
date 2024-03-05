import { Component, OnInit } from '@angular/core';
import { ICountry, orginCountry } from '../../types/contry-orgin.type';
import { CountryOrginService } from '../../services/country-orgin.service';
import { ILanguage, SupportedLanguage } from '../../types/language.type';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

interface IItemList {
  heading: string;
  items: IItems[];
}
interface IItems {
  item: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private countryOrginService: CountryOrginService
  ) {}

  itemsList: IItemList[] = [
    {
      heading: 'FOOTER.OUR_SUPPORTS',
      items: [
        {
          item: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
        },
        {
          item: 'bhaahanga,@gmail.com',
        },
        {
          item: '+88015-88888-9999',
        },
      ],
    },
    {
      heading: 'MENU.ACCOUNT',
      items: [
        {
          item: 'SIDE_BAR.MY_ACCOUNT',
        },
        {
          item: 'LOGIN.LOG_IN / LOGIN.REGISTER',
        },
        {
          item: 'HOME.CART',
        },
        {
          item: 'WISHLIST.WISHLIST',
        },
        {
          item: 'FOOTER.SHOP_WITH_US',
        },
      ],
    },
    {
      heading:"Quick Link",
      items:[
        {
          item:"FOOTER.PRIVACY_POLICY"
        },
        {
          item:"Terms Of Use"
        },
        {
          item:"FAQ"
        },
        {
          item:"SIDE_BAR.CONTACT_US"
        },
      ]
    }
  ];

  languageSubscription!: Subscription;
  countryOrginSubscription!: Subscription;
  countryArray: ICountry[] = this.countryOrginService.getAllCountry();

  showLanguage = false;
  showCountry = false;

  currentCountry!: ICountry;
  currentLanguage!: ILanguage;
  ngOnInit(): void {
    this.countryOrginSubscription =
      this.countryOrginService.switchCountry$.subscribe({
        next: (latestCountry) => {
          this.currentCountry = latestCountry;
          // this.languageService.changeLanguageTo(this.currentLanguage.id);
        },
      });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe(
      (latestLanguage) => {
        this.currentLanguage = latestLanguage;
      }
    );
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
    this.countryOrginService.changeCountryTo(country);
  }

  onDropdown() {
    this.showLanguage = !this.showLanguage;
    this.showCountry = false;
  }
  onCountryDropdown() {
    this.showCountry = !this.showCountry;
    this.showLanguage = false;
  }
  backToTop() {
    window.scrollTo(0, 0);
  }
}
