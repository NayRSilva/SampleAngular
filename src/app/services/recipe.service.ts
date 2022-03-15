import { Ingredient } from 'src/app/models/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable, Subject, Observer } from 'rxjs';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe: Subject<Recipe> = new Subject<Recipe>();
  onChangedRecipe = this.selectedRecipe.asObservable();

  recipes: Array<Recipe> = [
    new Recipe("cookie", "this is a cookie test", 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/375px-2ChocolateChipCookies.jpg',[new Ingredient("chocolate", 2), new Ingredient("flour", 1)]),
    new Recipe("chicken", "say another thing", 'https://www.thespruceeats.com/thmb/PRu9dPS_pM7I_LJg8aDMTleOI24=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-southern-fried-chicken-3056867-hero-01-58b66ff9e2f14b86bfdd50c7088cfe45.jpg', [] )
];

  constructor() { }

  addIngredient(recipe: Recipe, ingredient: Ingredient){
    recipe.ingredients.push(ingredient)
    
  } 
 


  deleteRecipe(recipe:Recipe){
    let removeIndex =  this.recipes.indexOf(recipe);
    this.recipes.splice(removeIndex, 1);
  }

  changeSelectedRecipe(recipe:Recipe){
    this.selectedRecipe.next(recipe);

  }

  getChangedObservable(){
    return this.onChangedRecipe;
  }

}
