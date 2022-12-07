import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CatalogService } from '../../catalog/catalog.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogService.getCategories(0).subscribe((categories) => {
      this.categories = categories;
    });
  }
}
