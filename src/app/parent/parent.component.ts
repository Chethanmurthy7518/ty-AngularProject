import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

import { Employee } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 5;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  // messageFromChild:string;

  // getMessage(message:string){

  //   this.messageFromChild=message


  
    

  // }

  isDisplay:boolean=false

  Name;
  Age;
  Designation;
  salary

  empData(employee:Employee){
    this.isDisplay=true
  
    this.Name=employee.Name;
    this.Age =employee.Age;
    this.Designation =employee.Designation;
    this.salary =employee.Salary
  }


}
