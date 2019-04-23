import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return this.httpClient.get<Product[]>(this.productsUrl);
    //return of(PRODUCTS);
  }

  getProduct(id: number): Product {
    this.messageService.add(`ProductService: getProduct: id=${id}`)
    //return "";
    return of(PRODUCTS.find(product => product.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**getProducts(): Product[] {
    this.messageService.add('ProductService: fetched products');
    return PRODUCTS;

  }*/

}