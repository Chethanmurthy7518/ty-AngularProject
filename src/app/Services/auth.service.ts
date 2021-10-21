import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data){
   return this.http.post(`${environment.tokenURL}/api/users/register`,data)
  }

  login(data){
   return this.http.post(`${environment.tokenURL}/api/users/login`,data)
  }

  getToken(){
    console.log("Token",localStorage.getItem('UserDetails'));
    
  }
}
