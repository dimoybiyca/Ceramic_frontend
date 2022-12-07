import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/common/category';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-grid',
  templateUrl: './catalog-grid.component.html',
  styleUrls: ['./catalog-grid.component.scss'],
})
export class CatalogGridComponent implements OnInit {
  id: number = 0;
  title: string = 'R';
  categories: Category[] = [];

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCategories();
      this.updateTitle();
    });
  }

  getCategories(): void {
    this.catalogService.getCategories(this.id).subscribe((categories) => {
      this.categories = categories;

      if (this.categories.length === 0) {
        this.router.navigate([`shop/${this.id}`]);
      }
    });
  }

  updateTitle(): void {
    if (this.id) {
      this.title = this.catalogService.root;
      return;
    }

    this.title = 'Каталог товарів';
  }
}
