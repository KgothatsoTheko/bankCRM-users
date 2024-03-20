import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  LogIn(){
    this.router.navigate(['/SignIn']);
  }
  
  constructor(private router: Router, private snackbar: MatSnackBar, private api: ApiServiceService){}
  logInForm = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
     pin:new FormControl('',[Validators.required])
    })
  submit(){
    console.log(this.logInForm)

    if(this.logInForm.invalid) {
      this.snackbar.open('Please fill in all fields', 'Ok', {duration: 3000})
    }

  this.api.genericPost('/SignIn', this.logInForm.value)
      .subscribe({
        next: (res: any) => {
          console.log('res', res)
          if (res._id) {
            this.snackbar.open('Login was successful', 'Ok', { duration: 3000 })
          } else {
            this.snackbar.open('Something went wrong ...', 'Ok', { duration: 3000 });
          }
        },
        error: (err: any) => console.log('Error', err),
        complete: () => { }
      });
    this.router.navigate(['/homepage']);
  }
}
