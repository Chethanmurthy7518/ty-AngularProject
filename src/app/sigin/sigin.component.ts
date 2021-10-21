import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
   val:any;
 
  login(value){
   this.val=value;
   if(this.val.username===localStorage.getItem("username") && this.val.password===localStorage.getItem("password"))
   { 
    this.router.navigateByUrl("/home");    
    alert("login Successful");
   }
   else{
     alert("invalid credentials")
     console.log("invalid credential");
   }
   console.log(this.val);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
