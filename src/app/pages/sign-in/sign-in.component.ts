import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInService } from './sign-in.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISignInPayload } from './sign-in.type';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  showPassword: boolean = false;
  returnUrl!: string;
  loginInProgress: boolean = false;
  error: boolean = false;
  error1: boolean = false;
  errorMessage: string = '';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser() {
    if (this.loginForm.valid) {
      this.signInservice
        .signIn(this.loginForm.value as ISignInPayload)
        .subscribe({
          next: (res) => {
            if (res.result) {
              this.router.navigateByUrl(this.returnUrl);
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
}
