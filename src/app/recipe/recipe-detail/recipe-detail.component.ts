import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Output() deletedRecipe = new EventEmitter<Recipe>();
  @Input() recipe : Recipe;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  ngOnInit(): void {


  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe);
    this.deletedRecipe.emit(null);

  }

  

  addToShoppingList(){
    this.recipe.ingredients.forEach(ingredient =>{
      this.slService.addIngredient(ingredient);
    })
  }
 
}
