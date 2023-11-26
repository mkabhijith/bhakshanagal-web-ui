import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { SignInService } from './sign-in.service';
import { ISignInPayload } from './sign-in.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  showPassword: boolean = false;
  loginInProgress: boolean = true;
  loginForm = new FormGroup({
    user: new FormControl("", [Validators.required, Validators.minLength(4)]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)])
  })
  constructor(private signInservice: SignInService, private router: Router) { }

  loginUser() {
    console.log('log clicked');

    if (this.loginForm.valid) {
      console.warn(this.loginForm.value)
      this.router.navigateByUrl('/home')
      this.signInservice.signIN(this.loginForm.value as ISignInPayload)
    }
  }
  onTogglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
}
