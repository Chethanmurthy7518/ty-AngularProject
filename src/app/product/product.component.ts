import { Component, OnInit } from '@angular/core';
import { SeriviceService } from '../serivice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  datas: any;

  constructor(private ProductService: SeriviceService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.ProductService.readData().subscribe((res) => {
      console.log(res);
      this.datas = res.data;
    })
  }

  add(data){
    // console.log(data);
    this.ProductService.addData(data).subscribe((response)=>{
      console.log(response)

    })

  }

  delete(id) {
    console.log(id);
    let alert = confirm("Want to delete")
    this.ProductService.deleteData(id).subscribe(response =>{
      console.log(response)
    })
    this.getData()
    console.log(id)
     
  }

}
