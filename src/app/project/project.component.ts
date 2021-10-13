import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// -----------------Interpolation---------
  message = "Hi this For Practice"

  //-------------------Property Binding
  Uname="Chethan";
  imglink = "https://images.unsplash.com/photo-1601394474465-8a0a78b2705d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
// -------------styleBinding-----------------

fontcol= "green"
multisty="color:black;background-color:white;width:200px"

// ------CLass Binding--------------
isSpec=false



// --------------------Event Binding----------------

displayMes(){
  console.log("This is Message from consoel")
}
// -----------------------AttributeBinding------------------------
col=2;
row=2;

write="Something"
val ="This is From parent to Parent1"
}


