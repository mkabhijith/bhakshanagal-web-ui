import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TitleService } from 'src/app/shared/services/title/title.service';
import { ISignInPayload } from './sign-in.type';
import { ILanguage } from 'src/app/shared/types/language.type';
import { SignInService } from './sign-in.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  showPassword: boolean = false;
  returnUrl!: string;
  loginInProgress: boolean = false;
  error: boolean = false;
  error1: boolean = false;
  errorMessage: string = '';
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private signInservice: SignInService,
    private router: Router,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private titleSerice: TitleService
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.titleSerice.changeTitle('sign in');
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  loginUser() {
    if (this.loginForm.valid) {
      this.loginInProgress = true;
      this.signInservice
        .signIn(this.loginForm.value as ISignInPayload)
        .subscribe({
          next: (res) => {
            if (res.result) {
              this.loginInProgress = false;
              if (res.user_role === 'admin') {
                this.router.navigate(['/admin']);
              } else {
                this.router.navigateByUrl(this.returnUrl);
              }
            } else {
              this.error1 = true;
              this.errorMessage = res.message;
              this.loginInProgress = false;
            }
          },
          error: (err) => {
            this.error1 = true;
            this.errorMessage = 'Request fail';
            this.loginInProgress = false;
          },
        });
    } else {
      this.error = true;
    }
  }
  onTogglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
