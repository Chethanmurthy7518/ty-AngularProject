import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ChildComponent, Employee } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
  @ViewChild(ChildComponent)child:ChildComponent;

  constructor() { }

  employee:Employee[]

  ngOnInit(): void {
    this.employee=[{
      Name:"CHETHAN",
      Age:26,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"AbiSheik",
      Age:26,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Bailappa",
      Age:26,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Ramya",
      Age:26,
      Designation:"DEVELOPER",
      Salary:25000

      
    },
    {
      Name:"Anu",
      Age:26,
      Designation:"DEVELOPER",
      Salary:25000

      
    }
  ]
    
  }
  ngAfterViewInit(){
    this.child.data.Name="John"
  
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

  // isDisplay:boolean=false

  Name;
  Age;
  Designation;
  salary

  empData(employee:Employee){
    // this.isDisplay=true
  
    this.Name=employee.Name;
    this.Age =employee.Age;
    this.Designation =employee.Designation;
    this.salary =employee.Salary
  }


}
