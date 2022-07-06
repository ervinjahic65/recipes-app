import { Component } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  name = "Angular";

  data: any;

  constructor(private service: FoodService) { }

  ngOnInit(): void {
    this.service.getSearch()
      .subscribe(response => {
        this.data = response;
      });
  }

}
