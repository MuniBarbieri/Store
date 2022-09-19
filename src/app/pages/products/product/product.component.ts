import { Product } from './../interfaces/product.interface';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() addToCartEvent = new EventEmitter<Product>();

  onClick(): void {
    this.addToCartEvent.emit(this.product);
  }
}
