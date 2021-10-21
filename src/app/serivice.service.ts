import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface user {
  id
  email
  first_name
  last_name
  avatar

}

@Injectable({
  providedIn: 'root'
})
export class SeriviceService {

  constructor(private http: HttpClient) {

  }

  // readData() {
  //   return this.http.get<{
  //     error: boolean,
  //     message: string,
  //     users: user[]
  //   }>(`${environment.baseUrl}/api/products`)
  // }
  
  readData(){
    return this.http.get < {
      data:any[]
    } > (`https://ty-shop-token.herokuapp.com/api/products`)
  }

  deleteData(i){
    this.http.get<{
      error:boolean,
      message:string,
      users:user[]

    }>(`${environment.baseUrl}${i}`)
  }


}
