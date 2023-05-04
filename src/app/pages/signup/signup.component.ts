import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { Router } from '@angular/router';

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

  constructor(private router: Router,private location: Location, private authService: AuthService){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm.value)
    this.authService.signup(this.signUpForm.get('email')?.value as string,
       this.signUpForm.get('password')?.value as string).then(cred =>{
        console.log(cred)
        const user: User = {
          uid: cred.user?.uid as string,
          email: this.signUpForm.get('email')?.value as string,
          name: this.signUpForm.get('name')?.value as string,
          phoneNumber: this.signUpForm.get('phone')?.value as string,

        };
        this.router.navigateByUrl('/main');
        //TODO: insert
       }).catch(error =>{
        console.error(error);
       });
  }

  goBack(){
    this.location.back();
  }


}
