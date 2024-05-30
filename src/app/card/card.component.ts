import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { Product } from '../interface/product';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() single_pro: any;
  allproduct!: Array<Product>;
  cartcounter!: number;
  cartproducts!: Array<Product>;
  constructor(private router: Router, private productsService: ProductsService) { }


  showSingle(id: number) {
    this.router.navigate(['/single-pro', id]);
  }
  ngOnInit() {
    this.productsService.getCounter().subscribe((res: number) => this.cartcounter = res, (error) => console.log("error counter"));
    this.productsService.getCart().subscribe((res: Array<Product>) => this.cartproducts = res, (error) => console.log("error counter"));
    this.productsService.getAllProducts().subscribe((res: any) => this.allproduct = res.products, (error) => console.log(error));

  }
  addToCart(id: number) {
    let pro: Product = this.allproduct.find((ele: Product) => {
      return ele.id == id;
    }
    )!;
    let proof: Product = this.cartproducts.find((ele: Product) => {
      return ele.id == pro.id;
    }
    )!;
    if (!proof) {
      pro.count = 1;
      pro.incart = true;
      this.cartproducts.push(pro);
      this.productsService.addCart(this.cartproducts);
      this.productsService.setCounter(this.cartcounter + 1);
    }







  }
}
