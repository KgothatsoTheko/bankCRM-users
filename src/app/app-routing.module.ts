import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' }, 
  {path: 'Landing', component: LandingComponent},
  {path: 'Register', component: SignInComponent},
  {path: 'LogIn', component: LogInComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'welcome', component: WelcomeMessageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
