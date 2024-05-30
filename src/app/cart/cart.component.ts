import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../service/products.service';
import { DicsPipe } from '../pipes/dics.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DicsPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  total: number = 0;
  cart !: Array<Product>;
  cartcounter!: number;
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.productsService.getCounter().subscribe((res: number) => this.cartcounter = res, (error) => console.log("error counter"));
    this.productsService.getCart().subscribe((res: Array<Product>) => this.cart = res, (error) => console.log("error counter"));
    // this.productsService.getAllProducts().subscribe((res: any) => this.allproduct = res.products, (error) => console.log(error));
    this.cart.forEach((element: any) => {
      this.total += (element.count * Math.ceil(element.price - (element.price * element.discountPercentage) / 100));
    });
  }
  addOne(id: number) {
    let pro: Product = this.cart.find((ele: Product) => {
      return ele.id == id;
    }
    )!;
    if (pro.stock != pro.count) {
      pro.count = pro.count! + 1;
      // this.cartproducts.push(pro);
      this.productsService.addCart(this.cart);
      this.total += Math.ceil(pro.price! - (pro.price! * pro.discountPercentage!) / 100);
    }
  }
  minusOne(id: number) {

    let pro: Product = this.cart.find((ele: Product) => {
      return ele.id == id;
    }
    )!;
    if (pro.count != 1) {
      pro.count = pro.count! - 1;
      // this.cartproducts.push(pro);
      this.productsService.addCart(this.cart);
      this.total -= Math.ceil(pro.price! - (pro.price! * pro.discountPercentage!) / 100);
    }
  }
  deleteFromCart(id: number) {
    let pro: Product = this.cart.find((ele: Product) => {
      return ele.id == id;
    }
    )!;
    this.cart = this.cart.filter((ele: Product) => {
      return ele.id != id;
    }
    )!;

    this.productsService.addCart(this.cart);
    this.productsService.setCounter(this.cartcounter - 1);
    this.total -= (pro.count! * Math.ceil(pro.price! - (pro.price! * pro.discountPercentage!) / 100));
  }
}
