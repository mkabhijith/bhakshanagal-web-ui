import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpService } from './sign-up.service';
import { ISignUpPayload } from './sign-up.type';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  constructor(
    private signupService: SignUpService,
    private router: Router,
    private languageService: LanguageService
  ) {}
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordMismatch: boolean = false;
  error: boolean = false;
  error1: boolean = false;
  errorMessage: string = '';
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.signupService
        .userSignUp(this.registerForm.value as ISignUpPayload)
        .subscribe({
          next: (res) => {
            if (res.status) {
              this.router.navigateByUrl('/signin');
            } else {
              this.error1 = true;
              this.errorMessage = res.message;
            }
          },
        });
    } else {
      this.error = true;
    }
  }

  onTogglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onToggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
