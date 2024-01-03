import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IForgotForm, IForgotPayload } from './forgot.type';
import { ForgotPasswordService } from './forgot-password.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  constructor(
    private forgotService: ForgotPasswordService,
    private messageService: MessageService,
    private router: Router,
    private languageService: LanguageService
  ) {}
  inProgress = false;
  isEmailValid = false;

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;

  forgotForm = new FormGroup<IForgotForm>({
    email: new FormControl('', [Validators.required, Validators.email]),
    code: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
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

  get emailControl() {
    return this.forgotForm.controls['email'];
  }
  forgotUser() {
    if (this.forgotForm.valid) {
      this.inProgress = true;
      this.forgotService
        .otpVerification(this.forgotForm.value as IForgotPayload)
        .subscribe({
          next: (res) => {
            if (res.result) {
              this.inProgress = false;
              this.router.navigate([
                '/change-password',
                this.emailControl.value,
              ]);
            } else {
              this.inProgress = false;
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.message,
              });
            }
          },
          error: (err) => {
            this.inProgress = false;
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Request fail',
            });
          },
        });
    }
  }
  getOtp() {
    if (this.emailControl.valid) {
      this.inProgress = true;
      this.forgotService.forgotPassWord(this.emailControl.value!).subscribe({
        next: (res) => {
          if (res.status) {
            this.inProgress = false;
            this.isEmailValid = true;
          } else {
            this.inProgress = false;
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: res.message,
            });
          }
        },
        error: (err) => {
          this.inProgress = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Request fail',
          });
        },
      });
    }
  }
}
