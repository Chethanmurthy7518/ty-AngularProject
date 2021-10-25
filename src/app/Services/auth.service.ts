import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data){
   return this.http.post(`${environment.baseUrl}/api/users/register`,data)
  }

  login(data){
   return this.http.post(`${environment.baseUrl}/api/users/login`,data)
  }

  getUserDetails(){
    console.log("Token",localStorage.getItem('UserDetails'));
    let userDeatils= JSON.parse(localStorage.getItem('UserDetails'));

    if(userDeatils){
      return userDeatils
    }
  }
}
