import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpService } from './sign-up.service';
import { ISignUpPayload } from './sign-up.type';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private signupService: SignUpService, private router: Router) {}
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordMismatch: boolean = false;
  error: boolean = false;
  error1: boolean = false;
  errorMessage: string = '';

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  registerUser() {
    if (this.registerForm.valid) {
      this.signupService
        .userSignUp(this.registerForm.value as ISignUpPayload)
        .subscribe({
          next: (res) => {
            if (res.status) {
              this.router.navigateByUrl('/signin')
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
