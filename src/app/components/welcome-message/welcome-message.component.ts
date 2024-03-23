import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent {
  constructor(private api:ApiServiceService, private sharedService: SharedService, private router: Router, private changeDetect: ChangeDetectorRef){
    this.user = this.sharedService.get('customers', 'session')
    
  }

  user:any
  
  transition: boolean = false;
  
  ngAfterViewInit(): void {
    this.transition = true;
    this.changeDetect.detectChanges();
  
    setTimeout(() => {
      this.router.navigate(['homepage']);
    }, 3000);
  }

}
