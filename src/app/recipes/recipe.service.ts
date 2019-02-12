import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Nazwa","Cos tu jest napisane","https://tiny.pl/txzb1"),
        new Recipe("Inna","Jest?","https://tiny.pl/txzb1")
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}