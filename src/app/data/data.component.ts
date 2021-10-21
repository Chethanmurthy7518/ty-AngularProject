import { FunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface product {
  name: string;
  image: string;
  price: number;
  color: string;

}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products: product[] = [
    {
      name: 'Iphone',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461__340.jpg',
      price: 42999,
      color: 'jet black',

    }, {
      name: 'Macbook',
      image: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378__340.jpg',
      price: 59999,
      color: 'gray',

    }, {
      name: 'Canon DSLR',
      image: 'https://cdn.pixabay.com/photo/2017/04/22/10/44/camera-2251051__340.jpg',
      price: 31999,
      color: 'red',

    }, {
      name: 'Boat Headset',
      image: 'https://cdn.pixabay.com/photo/2015/03/26/09/58/headphones-690685__340.jpg',
      price: 1599,
      color: 'black',

    },
    {
      name: 'Virtual Reality Play',
      image: 'https://cdn.pixabay.com/photo/2017/02/10/14/10/virtual-2055227__340.png',
      price: 6299,
      color: 'white',

    }

  ]


  delete(name) {
    var del = confirm("Definetly Want to delete it");
    if (del) {
      for (let i = 0; i < this.products.length; ++i) {
        if (this.products[i].name === name) {
          this.products.splice(i, 1);
        }
      }

    }
    else {

    }

  }

  addData(item){
    this.products.push(item);
  }

  editData(editd){
    this.products.push(editd);

}





}
