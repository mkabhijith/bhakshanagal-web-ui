import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  registerForm = new FormGroup({
    users: new FormControl('', [Validators.required, Validators.minLength(4)]),
    passwords: new FormControl(''),
    confirmPassword: new FormControl('')
  })
  registerUser() {
    console.warn(this.registerForm.value)

  }

}
