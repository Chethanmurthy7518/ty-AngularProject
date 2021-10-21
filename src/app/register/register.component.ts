import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any;
  register(val){
    this.data=val;
    localStorage.setItem("FirstName",this.data.fName);
    localStorage.setItem("LastName",this.data.lName);
    localStorage.setItem("EmailID",this.data.mailId);
    localStorage.setItem("Age",this.data.age);
    localStorage.setItem("address",this.data.address);
    localStorage.setItem("PhoneNumber",this.data.contactNumber);
    localStorage.setItem("password",this.data.password);
    localStorage.setItem("ConfirmPassword",this.data.confirmPassword);
    
    //console.log(this.user.userName);
    console.log(val);
    this.router.navigateByUrl("/sigin");
  
    
  }
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
