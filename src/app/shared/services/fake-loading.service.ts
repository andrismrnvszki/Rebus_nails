import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }


  // promise, observable
  loadingWithPromise(email: string, password: string): Promise<boolean>{
    return new Promise((resolve, reject)=>{
      let i = 0;
      const interval = setInterval(()=>{
        i++;
        if(i===3){
          clearInterval(interval)
            if(email === 'test@gmail.com' && password === 'testpw'){
              resolve(true)
            }else{
              reject(false)
            }
        }
      },1000);
    });
  }


  loadingWithObsevable(email:string, pwd:string): Observable<number>{
    return new Observable((subscriber: Subscriber<number>)=>{
      
    });

  }
}
