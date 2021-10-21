import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  onLogin(form){
    console.log(form)
    this.authService.login(form).subscribe(response =>{
      console.log(response)
      localStorage.setItem('UserDetails',JSON.stringify(response));
      this.router.navigate(['product'])
    })
  }


}
