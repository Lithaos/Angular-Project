import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Nazwa","Cos tu jest napisane","https://tiny.pl/txzb1"),
    new Recipe("Inna","Jest?","https://tiny.pl/txzb1")
  ];

  constructor() { }

  ngOnInit() {
  }

}
