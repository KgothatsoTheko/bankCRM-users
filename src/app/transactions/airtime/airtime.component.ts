import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { BalanceService } from 'src/app/services/balance.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.scss']
})
export class AirtimeComponent {

  balance!:number

  providers: string[] = ['Vodacom', 'Telkom', 'MTN', 'Cell-C']
  numberOptions: string[] = ['My Number', 'Another Number']
  

  // number = 614227501
  user:any
  userName:any
  userContact:any
  airtimeForm: FormGroup;  
  

  constructor(private matDialogRef: MatDialogRef<AirtimeComponent>, private api: ApiServiceService, private snackbar: MatSnackBar,
    @Inject (MAT_DIALOG_DATA) private data:any, private sharedService: SharedService, private balanceService: BalanceService) {
      this.user = this.sharedService.get('customers', 'session')
      console.log(this.user.data.email)

      const name = this.user.data.name + " " + this.user.data.surname 
      const number = this.user.data.contact 
      this.userName = name
      this.userContact = number

      this.airtimeForm = new FormGroup({
        customerName: new FormControl(this.userName),
        transactionId: new FormControl('trasactionID-'+ new Date().getTime()),
        provider: new FormControl('', Validators.required),
        numberOptions: new FormControl('', Validators.required),
        number: new FormControl(this.userContact, Validators.required),
        amount: new FormControl('', Validators.required)
        
      })
      
    }



    cancel() {
      this.matDialogRef.close();
    }
  
    submit() {
      let formValue = this.airtimeForm.value;
  
      if (this.airtimeForm.invalid) {
        this.snackbar.open("fill in fields", "OK", { duration: 3000 })
        return
      }
      

      console.log(formValue)
  
      const airtimeAmount = formValue.amount;

      this.api.genericPost('/airtime-withdraw/' + this.user.data.email, {airtimeAmount}).subscribe({
        next: (res: any) => {
          console.log('Airtime transactions successful:', res);
          const newBalance = res.balance;
          this.balanceService.setBalance(newBalance);
        },
        error: (error: any) => {
          console.error('Error transaction task:', error);
        },
        complete: () => { }
      });

      this.api.genericPost('/add-airtime', formValue).subscribe({
        next: (res: any) => {
          console.log("Saved data",res);
        },
        error: (err: any) => console.log("error", err),
        complete: () => { }
      });

  
      this.snackbar.open('Airtime purchased successfully', "OK", { duration: 3000 });
  
      this.matDialogRef.close()

    }
  }
  


