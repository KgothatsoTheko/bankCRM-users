import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { BalanceService } from 'src/app/services/balance.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-widthraw',
  templateUrl: './widthraw.component.html',
  styleUrls: ['./widthraw.component.scss']
})
export class WidthrawComponent {
  user:any
  constructor(private matDialogRef: MatDialogRef<WidthrawComponent>, private api: ApiServiceService, private snackbar: MatSnackBar,
    @Inject (MAT_DIALOG_DATA) private data:any, private sharedService: SharedService, private balanceService: BalanceService) {
      this.user = this.sharedService.get('customers', 'session')
      console.log(this.user.data.email)
    }
  
    withdrawForm = new FormGroup({
      withdrawId: new FormControl('trasactionID-'+ new Date().getTime()),
      balance: new FormControl('', Validators.required)
    })
  
    cancel() {
      this.matDialogRef.close();
    }
  
    submit() {
      let formValue = this.withdrawForm.value;
  
      if (this.withdrawForm.invalid) {
        this.snackbar.open("fill in fields", "OK", { duration: 3000 })
        return
      }
  
      console.log(formValue)
      const withdrawAmount = formValue.balance;

    this.api.genericPost('/withdraw-customerbalance/' + this.user.data.email, {withdrawAmount}).subscribe({
      next: (res: any) => {
        console.log('Withdraw successful:', res);
        const newBalance = res.balance;
        this.balanceService.setBalance(newBalance);
      },
      error: (error: any) => {
        console.error('Error withdrawing task:', error);
      },
      complete: () => { }
    });

    this.snackbar.open('Withdraw Submitted successfully', "OK", { duration: 3000 });

    this.matDialogRef.close()

  }
}
