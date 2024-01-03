import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordService } from './change-password.service';
import { IChangePasswordPaylod } from './change-password.type';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  constructor(
    private changePasswordService: ChangePasswordService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private languageService: LanguageService
  ) {}

  changePasswordForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  inProgress = false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const email = params['id'];
        this.changePasswordForm.patchValue({
          email: email,
        });
      },
    });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  changePassword() {
    if (this.changePasswordForm.valid) {
      this.inProgress = true;
      this.changePasswordService
        .passwordUpdate(this.changePasswordForm.value as IChangePasswordPaylod)
        .subscribe({
          next: (res) => {
            if (res.result) {
              this.inProgress = false;
              this.router.navigateByUrl('signin');
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
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid input',
      });
    }
  }
}
