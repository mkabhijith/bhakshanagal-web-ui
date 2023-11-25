import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordMismatch: boolean = false;

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })


  get passwordControl() {
    return this.registerForm.controls['password'];
  }

  get confirmPasswordControl() {
    return this.registerForm.controls['confirmPassword'];
  }


  registerUser() {
    if (this.registerForm.valid) {
      if (this.passwordControl.value == this.confirmPasswordControl.value) {
        console.warn(this.registerForm.value)
      } else {
        this.passwordMismatch = true;
      }
    }

  }
  onTogglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onToggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
