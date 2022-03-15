import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
    recipes: Array<Recipe> = [];

    constructor(private recipeService: RecipeService){

    }

    ngOnInit(): void {
        this.recipes = this.recipeService.recipes;
    }



 
}