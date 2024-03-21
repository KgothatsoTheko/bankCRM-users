import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  Amount!: number;
  setAmount(data:number) {
    this.Amount = data
  }

  getAmount() {
    return this.Amount
  }

  constructor() { }
}
