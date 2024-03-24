import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { BalanceService } from 'src/app/services/balance.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  user:any
constructor(private matDialogRef: MatDialogRef<DepositComponent>, private api: ApiServiceService, private snackbar: MatSnackBar,
  @Inject (MAT_DIALOG_DATA) private data:any, private sharedService: SharedService, private balanceService: BalanceService) {
    this.user = this.sharedService.get('customers', 'session')
    console.log(this.user.data.email)
  }

  depositForm = new FormGroup({
    depositId: new FormControl('trasactionID-'+ new Date().getTime()),
    balance: new FormControl('', Validators.required)
  })

  cancel() {
    this.matDialogRef.close();
  }

  submit() {
    let formValue = this.depositForm.value;

    if (this.depositForm.invalid) {
      this.snackbar.open("fill in fields", "OK", { duration: 3000 })
      return
    }

    console.log(formValue)
    const depositAmount = formValue.balance;

    this.api.genericPost('/update-customerbalance/' + this.user.data.email, {depositAmount}).subscribe({
      next: (res: any) => {
        console.log('Deposit successful:', res);
        console.log(res.balance)
        const newBalance = res.balance;
        this.balanceService.setBalance(newBalance);
      },
      error: (error: any) => {
        console.error('Error depositing task:', error);
      },
      complete: () => { }
    });

    this.snackbar.open('Deposit Submitted successfully', "OK", { duration: 3000 });

  this.matDialogRef.close()

  }
}
