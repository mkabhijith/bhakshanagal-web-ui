import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpService } from './sign-up.service';
import { ISignUpPayload } from './sign-up.type';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  constructor(
    private signupService: SignUpService,
    private router: Router,
    private languageService: LanguageService,
    private titleSerice: TitleService,
    private messageService: MessageService
  ) {}
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordMismatch: boolean = false;
  error: boolean = false;
  error1: boolean = false;
  errorMessage: string = '';
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  signInProgress: boolean = false;

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
    this.titleSerice.changeTitle('Sign up');
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.signInProgress = true;
      this.signupService
        .userSignUp(this.registerForm.value as ISignUpPayload)
        .subscribe({
          next: (res) => {
            if (res.status) {
              this.signInProgress = false;
              this.messageService.add({
                severity: 'info',
                summary: 'success',
                detail: res.message,
              });
              this.router.navigateByUrl('/signin');
            } else {
              this.signInProgress = false
              this.error1 = true;
              this.errorMessage = res.message;
            }
          },
          error: (err) => {
            this.signInProgress = false
            this.error1 = true;
            this.errorMessage = 'Request fail';
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
