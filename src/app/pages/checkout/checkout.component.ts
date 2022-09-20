import { Store } from './../../shared/interfaces/stores.interface';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  model = {
    name: 'asdas',
    store: '',
    shippingAddress: '',
    city: '',
  };

  stores: Store[] = [];
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void {
    console.log(value);
  }

  onSubmit() {
    console.log('Submited');
  }

  getStores(): void {
    this.dataSvc
      .getStores()
      .pipe(tap((res: Store[]) => (this.stores = res)))
      .subscribe();
  }
}
