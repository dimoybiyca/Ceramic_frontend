import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  popular: Product[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.popular = this.mainService.popular;
  }
}
