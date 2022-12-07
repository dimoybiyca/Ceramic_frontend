import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { ProductComponent } from './component/product/product.component';
import { HeaderSearchComponent } from './component/header/header-search/header-search.component';
import { CategoryListComponent } from './component/main/category-list/category-list.component';
import { ProductRowComponent } from './component/product-row/product-row.component';
import { PosterComponent } from './component/main/poster/poster.component';
import { CatalogComponent } from './component/catalog/catalog.component';
import { CategoryComponent } from './component/catalog/category/category.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { CatalogGridComponent } from './component/catalog/catalog-grid/catalog-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './component/shop/shop.component';
import { ShopProductsComponent } from './component/shop/shop-products/shop-products.component';
import { ShopFilterComponent } from './component/shop/shop-filter/shop-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductComponent,
    HeaderSearchComponent,
    CategoryListComponent,
    ProductRowComponent,
    PosterComponent,
    CatalogComponent,
    CategoryComponent,
    BreadcrumbComponent,
    CatalogGridComponent,
    ShopComponent,
    ShopProductsComponent,
    ShopFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
