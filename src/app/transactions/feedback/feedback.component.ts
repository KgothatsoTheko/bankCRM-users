import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedbackForm = new FormGroup({
    message: new FormControl('')
  })
  constructor(private snackbar: MatSnackBar, private api: ApiServiceService, private matDialogRef: MatDialogRef<FeedbackComponent> ) {
    
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
