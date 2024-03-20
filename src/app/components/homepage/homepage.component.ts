import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AirtimeComponent } from 'src/app/transactions/airtime/airtime.component';
import { ElectricityComponent } from 'src/app/transactions/electricity/electricity.component';
import { FeedbackComponent } from 'src/app/transactions/feedback/feedback.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public dialog: MatDialog, private router: Router) {}

  Amount:number = 1000

  openAirtime() {
    this.dialog.open(AirtimeComponent, {
      width: '35vw',
      maxWidth: '50vw'
    });
  }

  openElectricity() {
    this.dialog.open(ElectricityComponent, {
      width: '35vw',
      maxWidth: '50vw'
    });
  }

  logout(){
   this.router.navigate(['Landing'])
  }

  openFeedback() {
    this.dialog.open(FeedbackComponent, {
      width: '35vw',
      maxWidth: '50vw'
    });
  }

  // Subscribe to the amountSubmitted event emitted by AirtimeComponent
  // dialogRef.componentInstance.amountSubmitted.subscribe((amount: number) => {
    // Subtract the amount entered in the airtime form
  //   this.Amount -= amount;
  // });

}
