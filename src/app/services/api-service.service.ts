import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  serverUrl = 'http://localhost:6969'
  constructor(private http: HttpClient) {
  }

  genericPost(endpoint: any, body: any) {
    return this.http.post(this.serverUrl + endpoint, body)
  }

  genericGet(endpoint: string){
    return this.http.get(this.serverUrl+endpoint)
  }

  genericDelete(endpoint: string){
    return this.http.delete(this.serverUrl+endpoint)
  }

  genericUpdate(endpoint: any, body: any){
    return this.http.post(this.serverUrl + endpoint, body)
  }
}
