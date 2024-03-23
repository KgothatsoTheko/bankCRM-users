import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AirtimeComponent } from './transactions/airtime/airtime.component';
import { ElectricityComponent } from './transactions/electricity/electricity.component';
import { FeedbackComponent } from './transactions/feedback/feedback.component';
import { DepositComponent } from './transactions/deposit/deposit.component';
import { WidthrawComponent } from './transactions/widthraw/widthraw.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignInComponent,
    ToolbarComponent,
    LogInComponent,
    FooterComponent,
    HomepageComponent,
    AirtimeComponent,
    ElectricityComponent,
    FeedbackComponent,
    DepositComponent,
    WidthrawComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
