import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email = new FormControl('');
  password = new FormControl('');

  loading:boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService){ }

  ngOnInit(): void {  }

  login(){
    this.loading=true;
    this.authService.login(this.email.value as string, this.password.value as string).then(cred =>{
        console.log(cred);
        this.router.navigateByUrl('/main');
        this.loading=false;
    }).catch(err => {
      console.error(err);
      this.loading=false;
    })


    /*
    this.loading=true;
    //promise
    this.loadingService.loadingWithPromise(this.email.value as string, this.password.value as string).then((_:boolean) => {
      this.router.navigateByUrl('/main');
    }).catch(error =>{
      console.error(error, 'Email or password is not correct!');
      this.loading=false;
    }).finally(()=>{
      console.log("This is executed finally");
      this.loading=false;
    });

    //async-await

    */
  }
}


