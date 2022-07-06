import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private url = "https://api.spoonacular.com/recipes/716429/information?apiKey=f71c2c7c9edf474a8f2cddb65f86fd12&includeNutrition=true&https://api.spoonacular.com/recipes/complexSearch?";
  public favorites: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getSearch() {
    return this.httpClient.get(this.url);
  }

  getFavorite(): any[] {
    return this.favorites;
  }

  setFavorite(favorites: any): void {
    this.favorites = favorites;
  }
}
