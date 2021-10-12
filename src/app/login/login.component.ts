import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  greetings = "HIII "

  userName="CHETHAN"

  imgurl = "https://images.unsplash.com/photo-1633885278462-f6e52e3081fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
  fontcolor = "blue";
  multistyle = "color:blue; background-color:black;width:500px"
  isSpecial =true;

  displayMessage(){
    console.log("Message Displayed By clicking the button")
  }

  columnSpan = 2;
  rowSpan =2;

  user = "CHETHAN MURTHY"
}
