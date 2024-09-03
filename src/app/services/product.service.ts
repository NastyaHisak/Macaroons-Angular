import { Injectable } from '@angular/core';
import {ProductsType} from "../types/products.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): ProductsType[] {
    return [
      {
        image: 'macaroon-1.png',
        title: 'Макарун с малиной',
        count: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon-2.png',
        title: 'Макарун с манго',
        count: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon-3.png',
        title: 'Пирог с ванилью',
        count: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon-4.png',
        title: 'Пирог с фисташками',
        count: '1 шт.',
        price: 1.70
      },
    ]
  }
}
