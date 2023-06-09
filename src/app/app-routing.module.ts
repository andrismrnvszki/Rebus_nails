import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './share/services/auth.guard';

//lazy-loading
const routes: Routes = [
  { 
    path: 'main', 
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },
  { 
    path: 'gallery', 
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule) 
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'not-found', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'appointments', 
    loadChildren: () => import('./pages/appointments/appointments.module').then(m => m.AppointmentsModule),
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { 
    path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  
  { 
    path: '**', 
    redirectTo:'/not-found' 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
