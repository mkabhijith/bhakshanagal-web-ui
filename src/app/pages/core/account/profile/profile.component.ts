import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private languageService: LanguageService,
    private titleSerice: TitleService
  ) {}
  onEdit: boolean = false;

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    number: new FormControl(),
  });
  ngOnInit(): void {
    this.titleSerice.changeTitle("Profile")
    // this.profileForm.setValue({
    //   name: 'rahul',
    //   email: 'yahoo@gmail.com',
    //   number: '000522246',
    // });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe()
  }
  navgateToAccount() {
    this.router.navigate(['account']);
  }
}
