import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { AirtimeComponent } from 'src/app/transactions/airtime/airtime.component';
import { ElectricityComponent } from 'src/app/transactions/electricity/electricity.component';
import { FeedbackComponent } from 'src/app/transactions/feedback/feedback.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent{

  constructor(public dialog: MatDialog, private router: Router, private sharedService: SharedService) {
  }

  

  balance = 1000;

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
   this.router.navigate(['/Landing'])
  }

  openFeedback() {
    this.dialog.open(FeedbackComponent, {
      width: '35vw',
      maxWidth: '50vw'
    });
  }

 

}
