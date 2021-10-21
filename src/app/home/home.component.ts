import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = localStorage.getItem("username");
  mailid = localStorage.getItem("mailId");
  userid = localStorage.getItem("userId");
  password = localStorage.getItem("password");
  address = localStorage.getItem("address");

  constructor() { }

  ngOnInit(): void {
  }

}
