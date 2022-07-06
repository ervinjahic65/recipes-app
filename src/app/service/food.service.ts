import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = "4c8b0a0e93264adb8840cdcc6d0b95a1";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private url = "https://api.spoonacular.com/recipes/716429/information?apiKey=4c8b0a0e93264adb8840cdcc6d0b95a1&includeNutrition=truettps://api.spoonacular.com/recipes/complexSearch?";
  private favorites: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getSearch(query: string, cuisine: string, diet: string): Observable<any> {
    return this.httpClient.get(this.url, {
      params: {
        app_key: API_KEY,
        q: query,
        cuisine: cuisine,
        diet: diet
      }
    });
  }
}
