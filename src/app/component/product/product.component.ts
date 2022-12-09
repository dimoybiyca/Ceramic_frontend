import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() preview: boolean = false;

  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
