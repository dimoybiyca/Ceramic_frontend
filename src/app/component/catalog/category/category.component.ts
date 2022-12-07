import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category!: Category;

  constructor(private catalogService: CatalogService, private router: Router) {}

  ngOnInit(): void {}

  onNavigate() {
    this.catalogService.root = this.category.name;
    this.router.navigate([`catalog/${this.category.id}`]);
  }
}
