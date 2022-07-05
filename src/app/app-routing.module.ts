import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: "favorites", component: FavoritesComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "seatch", component: SearchComponent },
  { path: "", redirectTo: "/recipes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
