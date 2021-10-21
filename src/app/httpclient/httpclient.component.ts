import { Component, OnInit } from '@angular/core';
import { SeriviceService } from '../serivice.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  datas

  constructor(private DataService:SeriviceService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.DataService.readData().subscribe((res)=>
    {
      console.log(res);
      this.datas = res;
    })
  }

  delete(data){
    console.log(data);
    let alert= confirm("Want to delete")
    if(alert){
    
      this.datas.data.splice(data,1)
    }
    
    
  }




}
