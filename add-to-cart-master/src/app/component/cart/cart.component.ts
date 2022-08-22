import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      // this.grandTotal = this.cartService.getTotalPrice();
      this.grandTotal = this.cartService.getTotalPrice();

    });


  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  quantity: number = 1;
  qty = 1;

  plus() {
    if (this.qty != 99) {
      this.qty++;
      this.quantity = this.qty;

    }
    return this.grandTotal = this.cartService.getTotalPrice() * this.qty;
  }

  minus() {
    if (this.qty != 1) {
      this.qty--;
      this.quantity = this.qty;

    }
    return  this.grandTotal = this.cartService.getTotalPrice() * this.qty;
  }
}
