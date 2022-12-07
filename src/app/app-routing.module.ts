import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './component/catalog/catalog.component';
import { MainComponent } from './component/main/main.component';
import { ShopComponent } from './component/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: CatalogComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
