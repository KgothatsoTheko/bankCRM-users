import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' }, 
  {
    path: 'Landing', component: LandingComponent
  }, {
    path: 'SignIn', component: SignInComponent
  }, {
    path: 'LogIn', component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
