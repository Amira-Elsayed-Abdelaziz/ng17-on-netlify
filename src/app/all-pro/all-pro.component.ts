import { Component } from '@angular/core';
import data from '../../assets/json/products-list.json';
import { CardComponent } from '../card/card.component';
import { Product } from '../interface/product';
import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-all-pro',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './all-pro.component.html',
  styleUrl: './all-pro.component.css'
})
export class AllProComponent {
  allproduct!: Array<Product>;
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.productService.getAllProducts().subscribe((res : any) => this.allproduct=res.products, (error) => console.log(error));
  }
}
