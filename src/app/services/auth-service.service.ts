import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  setToken(user: any): void {
    return localStorage.setItem('user',JSON.stringify(user)) ;
  }

  getToken(){
      const temp = localStorage.getItem('user');
      return temp ? JSON.parse(temp) : [];
    }
  

  isLoggedIn() {
    return this.getToken() != null;
  }

  logout() {
    localStorage.removeItem('user')
    this.router.navigate(['/register'])
  }

  login(userDetails:any) {
    this.getToken()
   this.setToken(userDetails)
  }
}
