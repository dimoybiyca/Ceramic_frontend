import { Injectable } from '@angular/core';
import { Product } from 'src/app/common/product';
import { Property } from 'src/app/common/property';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  popular: Product[] = [
    new Product(
      1,
      'Product 1',
      'some description',
      10,
      'шт',
      9899,
      'none',
      'У наявності',
      'KOLO',
      'Ukraine',
      [new Property('Колір', 'Білий'), new Property('Тип', 'Прямий')]
    ),
    new Product(
      2,
      'Product 2',
      'some description',
      10,
      'шт',
      9899,
      'none',
      'У наявності',
      'KOLO',
      'Ukraine',
      [new Property('Колір', 'Білий'), new Property('Тип', 'Прямий')]
    ),
    new Product(
      3,
      'Product 3',
      'some description',
      10,
      'шт',
      9899,
      'none',
      'У наявності',
      'KOLO',
      'Ukraine',
      [new Property('Колір', 'Білий'), new Property('Тип', 'Прямий')]
    ),
    new Product(
      4,
      'Product 4',
      'some description',
      10,
      'шт',
      9899,
      'none',
      'У наявності',
      'KOLO',
      'Ukraine',
      [new Property('Колір', 'Білий'), new Property('Тип', 'Прямий')]
    ),
    new Product(
      5,
      'Product 5',
      'some description',
      10,
      'шт',
      9899,
      'none',
      'У наявності',
      'KOLO',
      'Ukraine',
      [new Property('Колір', 'Білий'), new Property('Тип', 'Прямий')]
    ),
  ];

  constructor() {}
}
