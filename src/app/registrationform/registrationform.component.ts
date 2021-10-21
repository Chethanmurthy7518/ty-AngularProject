import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onRegister(form){
    console.log(form);
    this.authService.register(form).subscribe(response =>{
      console.log(response)

    })
  }

}
