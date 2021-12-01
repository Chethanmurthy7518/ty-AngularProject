import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductComponent } from './product/product.component';

interface Products{
  _id:string;
  productName:string;
  productImageURL:string;
  productDescription:string
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
    } > (`${environment.baseUrl}/products/products`)
  }

  addData(data){

    return this.http.post<{
      error:boolean,
      message:string,
      products:Products[]
      
    }>
      (`${environment.baseUrl}/products/add-product/`,data)
  }

  deleteData(i){
   return this.http.delete<{
      error:boolean,
      message:string
      
      

    }>(`${environment.baseUrl}/products/delete-product/${i}`)
  }

  isAdmin(){
    let userDeatils=JSON.parse(localStorage.getItem('UserDetails'))
    return userDeatils.role === "admin"
  }


}
