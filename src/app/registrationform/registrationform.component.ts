import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  router: any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onRegister(form){
    console.log(form);
    this.authService.register(form).subscribe(response =>{
      console.log(response)
      this.router.navigate(['loginform'])

    })
    

  }

}
