import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.scss']
})
export class ElectricityComponent {
  electricityForm = new FormGroup({
    transactionId: new FormControl('trasactionID-'+ new Date().getTime()),
    meterNo: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required)

  })

  constructor(private matDialogRef: MatDialogRef<ElectricityComponent>, private api: ApiServiceService, private snackbar: MatSnackBar,
    @Inject (MAT_DIALOG_DATA) private data:any) {}

    cancel() {
      this.matDialogRef.close();
    }
  
    submit() {
      let formValue = this.electricityForm.value;
  
      if (this.electricityForm.invalid) {
        this.snackbar.open("fill in fields", "OK", { duration: 3000 })
        return
      }


      console.log(formValue)
  
      this.api.genericPost('/add-electricity', formValue).subscribe({
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
