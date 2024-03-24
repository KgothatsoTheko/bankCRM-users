import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedbackForm: FormGroup
  user:any
  userName:any
  
  constructor(private snackbar: MatSnackBar, private api: ApiServiceService, private sharedService: SharedService, private matDialogRef: MatDialogRef<FeedbackComponent> ) {

    this.user = this.sharedService.get('customers', 'session')

    const name = this.user.data.name + " " + this.user.data.surname 
      this.userName = name

      this.feedbackForm = new FormGroup({
        customerName: new FormControl(this.userName),
        message: new FormControl('', Validators.required),
      })
  }

  cancel() {
    this.matDialogRef.close();
  }

  submit() {
    let formValue = this.feedbackForm.value;

    if (this.feedbackForm.invalid) {
      this.snackbar.open("fill in fields", "OK", { duration: 3000 })
      return
    }


    console.log(formValue)

    this.api.genericPost('/feedback', formValue).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => console.log("error", err),
      complete: () => { }
    });

    this.snackbar.open('Submitted successfully', "OK", { duration: 3000 });

  this.matDialogRef.close()

  }
}
