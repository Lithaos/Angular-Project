import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Nazwa","Cos tu jest napisane","https://tiny.pl/txzb1",[
            new Ingredient("Meat",1),
            new Ingredient("French Fries", 20)
        ]),
        new Recipe("Inna","Jest?","https://tiny.pl/txzb1",[
            new Ingredient("Buns",2),
            new Ingredient("Meat",1)
        ])
      ];

      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }
      
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}