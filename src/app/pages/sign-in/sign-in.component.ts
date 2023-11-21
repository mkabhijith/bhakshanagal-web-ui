import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  
  loginForm = new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(4)]),
    password:new FormControl("",[Validators.required,Validators.minLength(4)])
  })
  loginUser(){
    console.warn(this.loginForm.value)
    
  }
}
