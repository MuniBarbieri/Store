import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productSvc
      .getProducts()
      .pipe(tap((productList: Product[]) => (this.products = productList)))
      .subscribe();
  }

  addToCart(product: Product): void {
    this.shoppingCartSvc.updateCart(product);
  }
}
