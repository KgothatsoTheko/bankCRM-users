import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  title= "signInForm";
  signInForm = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
     pin:new FormControl('',[Validators.required]),
     pinConfirm:new FormControl('',[Validators.required]),
     emailConfirm:new FormControl('',[Validators.required]),
     idNo:new FormControl('',[Validators.required]),
     contact:new FormControl('',[Validators.required])
  })
  constructor(private snackbar: MatSnackBar, private router: Router) { }


submit():void{
  console.log(this.signInForm)
  console.log(this.signInForm.controls['pin'].value)

}
get email(){
  return this.signInForm.get('email')
}

}


