import { RecipeService } from 'src/app/services/recipe.service';
import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("itemRecipe") recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onItemClick(recipe : Recipe){
    this.recipeService.changeSelectedRecipe(recipe);

}
}
