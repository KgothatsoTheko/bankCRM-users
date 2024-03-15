import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private router: Router){}
  LogIn(){
    this.router.navigate(['/LogIn']);
  }
  home(){
    this.router.navigate(['/Landing']);
  }
}
