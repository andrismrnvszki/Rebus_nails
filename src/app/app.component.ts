import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Rebus_nails';
  page = ''
  routes: Array<string> = [];

  constructor(private router: Router){
    //paraméter adattag
  }

  ngOnInit(){

    this.routes = this.router.config.map(conf => conf.path) as string[];
    //reaktív programozás
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any)=>{
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    })
  }

  changePage(selectedPage: string){
    //this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSideNav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav){
    if(event === true){
      sidenav.close();
    }
  }
}
