import { Component } from '@angular/core';
import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter!: number;
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    this.productsService.getCounter().subscribe((res: number) => this.counter = res, (error) => console.log("error count"))
  }

}
