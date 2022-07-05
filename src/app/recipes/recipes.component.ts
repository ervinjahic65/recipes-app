import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipes!: any[];

  query: string = "";
  favorites: boolean = false;
  cuisine!: string;
  diet!: string;
  index!: number;
  clicked!: boolean;
  math = Math;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    console.log(this.favorites);
    this.foodService.getSearch(this.query, this.cuisine, this.diet);
  }

}
