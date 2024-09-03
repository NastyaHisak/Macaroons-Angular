import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ProductsType} from "../../types/products.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductsType;

  @Output() addToCartEvent: EventEmitter<ProductsType> = new EventEmitter<ProductsType>();

  constructor() {
     this.product = {
       image: '',
       title: '',
       count: '',
       price: 0
     }
  }
  addProductToCart(){
    this.addToCartEvent.emit(this.product);
  }

}
