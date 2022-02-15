import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
    @Output() recipeDetails = new EventEmitter<Recipe>();
    recipes: Array<Recipe> = [
        new Recipe("cookie", "this is a cookie test", 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/375px-2ChocolateChipCookies.jpg'),
        new Recipe("chicken", "say another thing", 'https://www.thespruceeats.com/thmb/PRu9dPS_pM7I_LJg8aDMTleOI24=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-southern-fried-chicken-3056867-hero-01-58b66ff9e2f14b86bfdd50c7088cfe45.jpg' )
    ];

    constructor(){

    }

    ngOnInit(): void {
        
    }

    openDetails(itemRecipe: Recipe){
        this.recipeDetails.emit(itemRecipe);

    }

 
}