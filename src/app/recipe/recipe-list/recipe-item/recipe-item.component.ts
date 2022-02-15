import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("itemRecipe") recipe: Recipe;
  @Output("itemClicked") itemEmitted = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(recipe : Recipe){
    this.itemEmitted.emit(recipe);

}
}
