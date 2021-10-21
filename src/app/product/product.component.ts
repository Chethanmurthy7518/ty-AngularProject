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
      this.datas = res;
    })
  }

  delete(data) {
    console.log(data);
    let alert = confirm("Want to delete")
    if (alert) {
      const index = this.datas.products.indexOf(data);
      this.datas.products.splice(index, 1);

      // this.datas.data.splice(data,1)
    }
  }

}
