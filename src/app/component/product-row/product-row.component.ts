import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss'],
})
export class ProductRowComponent implements OnInit {
  @Input() title: string = '';
  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}
}
