import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private counter = new BehaviorSubject<number>(0)
  private cart = new BehaviorSubject<Array<Product>>([]);

  constructor(private http: HttpClient) { }
  getCounter() {
    return this.counter.asObservable();
  }

  setCounter(newValue: number) {
    this.counter.next(newValue);
  }
  getCart() {
    return this.cart.asObservable();
  }
  addCart(newCart: Array<Product>) {
    this.cart.next(newCart);
  }
  removeCart(newCart: Array<Product>) {
    this.cart.next(newCart);
  }
  getAllProducts() {
    return this.http.get("https://dummyjson.com/products/");
  }

}
