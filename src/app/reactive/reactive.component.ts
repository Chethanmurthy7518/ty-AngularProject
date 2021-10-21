import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { customValidaators } from './validation';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  EmployeeForm:FormGroup;

  onsubmit(){

    console.log(this.EmployeeForm.value)

  }
  // addPhone(i){
  //   this.EmployeeForm.get('Phone').push(new FormControl())
  // }
  // deletePhone(i){
  //   this.EmployeeForm.get('Phone').splice(i)
  // }

  constructor(private fb:FormBuilder) { 
    this.EmployeeForm=fb.group({
      Name :['',Validators.required],
      Designation :['',Validators.required],
      Address:fb.group({
        Street: ['',Validators.required],
        Area:['',Validators.required],
        PIN:['',Validators.required]
      }),
      Password:['',Validators.required],
      CPassword:['',Validators.required]

    },
    {
       validators:customValidaators
    }
    )

  }

  get Name(){
    return this.EmployeeForm.get('Name')
  }
  get Designation(){
    return this.EmployeeForm.get('Designation')
  }
  get Street(){
    return this.EmployeeForm.get('Address.Street')
  }
  get Area(){
    return this.EmployeeForm.get('Address.Area')
  }
  get PIN(){
    return this.EmployeeForm.get('Address.PIN')
  }
  get Password(){
    return this.EmployeeForm.get('Password')
  }

  get CPassword(){
    return this.EmployeeForm.get('CPassword')
  }


  ngOnInit(): void {

    

  }



}
