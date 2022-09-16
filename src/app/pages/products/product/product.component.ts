import { Product } from './../interfaces/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.addToCartEvent.emit(this.product);
  }
}
