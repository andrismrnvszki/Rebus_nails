import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loadingService: FakeLoadingService){ }

  ngOnInit(): void {  }

  login(){
    //promise
    this.loadingService.loadingWithPromise(this.email.value as string, this.password.value as string).then((_:boolean) => {
      this.router.navigateByUrl('/main');
    }).catch(error =>{
      console.error(error, 'Email or password is not correct!');
    }).finally(()=>{
      console.log("This is executed finally")
    });

    //async-await
    
  }
}


