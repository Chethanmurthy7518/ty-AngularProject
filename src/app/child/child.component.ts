import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Employee{
  Name:string;
  Age:number;
  Designation:string;
  Salary:number
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  constructor() { }

  @Input()count:number;
  @Output()message = new EventEmitter();

  // value:string;

  multistyle="color:red;background-color:white;width:5000px;height:300px"

  employee:Employee

  ngOnInit(): void {
    // this.value="Happy Desehra From Child"
    this.employee={
      Name:"CHETHAN",
      Age:26,
      Designation:"DEVELOPER",
      Salary:25000
    }

  }
  

  passData(){
  
    
    this.message.emit(this.employee);
  }





}
