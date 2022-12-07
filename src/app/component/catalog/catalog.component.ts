import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
