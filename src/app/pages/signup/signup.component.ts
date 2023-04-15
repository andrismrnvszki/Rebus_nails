import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

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

  constructor(private location: Location){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm.value)
  }

  goBack(){
    this.location.back();
  }
}
