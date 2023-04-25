import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signUpForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl('')
  })

  constructor(private location: Location, private authService: AuthService){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm.value)
    this.authService.signup(this.signUpForm.get('email')?.value as string,
       this.signUpForm.get('password')?.value as string).then(cred =>{
        console.log(cred)
       }).catch(error =>{
        console.error(error);
       });
  }

  goBack(){
    this.location.back();
  }


}
