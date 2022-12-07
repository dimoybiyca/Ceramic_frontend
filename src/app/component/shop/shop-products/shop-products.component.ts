import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss'],
})
export class ShopProductsComponent implements OnInit {
  categoryId: number = -1;
  products: Product[] = [];

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = +params['id'];
    });

    this.shopService.getProducts(this.categoryId).subscribe((products) => {
      this.products = products;
    });
  }
}
