import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CountryOrginService } from 'src/app/shared/services/country-orgin.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { IcardType } from 'src/app/shared/types/card.type';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss'],
})
export class OriginComponent implements OnInit, OnDestroy {
  constructor(
    private orginService: LanguageService,
    private route: ActivatedRoute,
    private countryService: CountryOrginService,
    private router: Router
  ) {}
  private countrySubscripition!: Subscription;

  activePage!: string;
  orginList!: IcardType[];

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.activePage = params['id'];
        if (this.activePage == 'language') {
          this.countrySubscripition =
            this.countryService.switchCountry$.subscribe({
              next: (currentCountry) => {
                const newLanguageArray = currentCountry.languages;
                this.orginList = newLanguageArray.map(
                  ({ id, name, image }) => ({
                    id,
                    name,
                    image,
                  })
                );
              },
            });
        } else if (this.activePage == 'country') {
          const newCountryArray = this.countryService.getAllCountry();
          this.orginList = newCountryArray.map(({ id, name, flag }) => ({
            id,
            name,
            image: flag,
          }));
        }
      },
    });
  }

  ngOnDestroy(): void {
    if (this.countrySubscripition) {
      this.countrySubscripition.unsubscribe();
    }
  }

  updateOrigin(originId: number) {
    if (this.activePage == 'language') {
      this.orginService.changeLanguageTo(originId);
    } else if (this.activePage == 'country') {
      this.countryService.changeCountryTo(originId);
    }
    this.router.navigate(['/home']);
  }
}
