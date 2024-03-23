import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  User:any[] = []

  LogIn(){
    this.router.navigate(['/LogIn']);
  }

  genders: string[] = ['Male', 'Female']
 
  signInForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    surname:new FormControl('',[Validators.required]),
    id:new FormControl('',[Validators.required]),
    gender: new FormControl('', [Validators.required]),
    contact:new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email]),
    pin:new FormControl('',[Validators.required]),
    pinConfirm:new FormControl('',[Validators.required]),
    balance: new FormControl(0),
    rememberMe: new FormControl(''),
  })
  constructor(private snackbar: MatSnackBar, private router: Router, private api: ApiServiceService) { }


  submit():void{

    if(this.signInForm.invalid) {
      this.snackbar.open('Please fill in all fields', 'Ok', {duration: 3000})
    }

    if (this.signInForm.get('pin')?.value !== this.signInForm.get('pinConfirm')?.value) {
      this.signInForm.get('pinConfirm')?.setErrors({ 'pattern': true });
      return;
    }

  this.api.genericPost('/SignIn', this.signInForm.value)
      .subscribe({
        next: (res: any) => {
          console.log('res', res)
          if (res._id) {
            this.snackbar.open('Customer successfully added', 'Ok', { duration: 3000 })
            this.router.navigate(['/LogIn'])
          } else {
            this.snackbar.open('Something went wrong ...', 'Ok', { duration: 3000 });
          }
        },
        error: (err: any) => console.log('Error', err),
        complete: () => { }
      });



  }
  
}


