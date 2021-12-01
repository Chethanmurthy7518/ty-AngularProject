import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

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
export class ChildComponent implements OnInit,OnChanges,AfterViewInit{

  constructor() { }

  @Input()count:number;
  @Input()data:Employee;
  @ViewChild('main')div:ElementRef;
  @Output()message = new EventEmitter();
  @ViewChild(ChildComponent)child:ChildComponent;

  // value:string;

  multistyle="color:red;background-color:white;width:5000px;height:300px"

  

  ngOnInit(): void {
    // this.value="Happy Desehra From Child"
   
    // this.div.nativeElement.style.color = "blue"  ----The view will ot execute on OnInt

  }
  ngOnChanges(changes:SimpleChanges){
    // this.div.nativeElement.style.color = "blue" ----The view will ot execute on OnChanges


  }


  ngAfterViewInit(){
    // this.div.nativeElement.style.color = "blue";
    // this.div.nativeElement.innerHTML = "HIIIII";
    this.div.nativeElement.classList ="style";
    
  
    


  }
  

  passData(){
  
    this.data.Name="Chethan"
    this.data.Age=27;
    
    
  }


















































}
