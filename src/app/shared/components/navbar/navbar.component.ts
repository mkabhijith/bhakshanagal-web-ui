import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ILanguage } from '../../types/language.type';
import { Subscription, debounceTime } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

type INavBar = {
  id: number;
  title: string;
  icon?: string;
  route: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {}
 
  currentLanguage!: ILanguage;

  languageSubscription!: Subscription;

  linksForNavbar: INavBar[] = [
    {
      id: 0,
      title: 'NAVBAR.HOME',
      route: 'home',
    },
   

    {
      id: 2,
      title: 'NAVBAR.ABOUT',
      route: 'about',
    },
    // {
    //   id: 3,
    //   title :'NAVBAR.CANCEL_ORDERS',
    //   route :''
    // }
  ];

  form = new FormGroup({
    searchTerm: new FormControl(''),
  });

  searchTerm: any;
  values: any = 0;

  ngOnInit(): void {
    this.searchTermControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((res) => {
        console.log('debounce time ', res);
      });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (res) => {
        this.currentLanguage = res;
      },
    });
  }
  get searchTermControl() {
    return this.form.controls['searchTerm'];
  }
}
