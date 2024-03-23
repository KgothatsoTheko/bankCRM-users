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

  register(){
    this.router.navigate(['/Register']);
  }
  
  constructor(private router: Router, private snackbar: MatSnackBar, private api: ApiServiceService){}
  logInForm = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
     pin:new FormControl('',[Validators.required])
    })
  submit(){
    console.log(this.logInForm)

  this.api.genericPost('/LogIn', this.logInForm.value)
      .subscribe({
        next: (res: any) => {
          console.log('res', res)
          if (res) {
            this.snackbar.open('Login was successful', 'Ok', { duration: 3000 })
          sessionStorage.setItem('customers', JSON.stringify(res));
            this.router.navigate(['/welcome'])

          } 
        },
        error: (err: any) => console.log('Error', err),
        complete: () => { }
      });
    
  }
}
