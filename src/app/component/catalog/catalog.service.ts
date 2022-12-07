import { EventEmitter, Injectable } from '@angular/core';
import { Category } from 'src/app/common/category';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  root: string = 'Каталог товарів';

  constructor(private http: HttpClient) {}

  getCategories(id: number): Observable<Category[]> {
    if (!id) {
      id = 0;
    }

    return this.http.get<Category[]>(
      `http://localhost:8080/api/public/category/${id}/sub`
    );
  }
}
