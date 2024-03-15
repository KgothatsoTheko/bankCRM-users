import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-styles',
  templateUrl: './angular-styles.component.html',
  styleUrls: ['./angular-styles.component.scss']
})
export class AngularStylesComponent {
@Input() title!:string;
}
