import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BalanceService } from 'src/app/services/balance.service';
import { SharedService } from 'src/app/services/shared.service';
import { AirtimeComponent } from 'src/app/transactions/airtime/airtime.component';
import { DepositComponent } from 'src/app/transactions/deposit/deposit.component';
import { ElectricityComponent } from 'src/app/transactions/electricity/electricity.component';
import { FeedbackComponent } from 'src/app/transactions/feedback/feedback.component';
import { WidthrawComponent } from 'src/app/transactions/widthraw/widthraw.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  constructor(public dialog: MatDialog, private router: Router, private sharedService: SharedService, private balanceService: BalanceService) {
    this.user = this.sharedService.get('customers', 'session')
  console.log(this.user.data.name)
  }

  user:any

  ngOnInit() {
    this.balanceService.balance$.subscribe(balance => {
      // Update the balance in the component
      this.user.data.balance = balance;
    });
  }

  

  openAirtime() {
    this.dialog.open(AirtimeComponent, {
      width: '35vw',
      maxWidth: '50vw'
    });
    
  }

  deposit() {
    this.dialog.open(DepositComponent, {
      width: '35vw',
      maxWidth: '50vw'
    });
  }

  widthraw() {
    this.dialog.open(WidthrawComponent, {
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
