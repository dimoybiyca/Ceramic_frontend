import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/common/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://localhost:8080/api/public/product/${categoryId}`
    );
  }
}
