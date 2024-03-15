import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  
  constructor(private router: Router){}
  logInForm = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required])
    })
  submit(){
    console.log(this.logInForm)
    this.router.navigate(['/LogIn']);
  }
}
