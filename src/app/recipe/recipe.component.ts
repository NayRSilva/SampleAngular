import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';


@Component({
    selector: 'recipe-component',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit{
    recipeDetails: Recipe = null;

    constructor(){

    }

    
    ngOnInit(): void {
        
    }

    openDetails(item: Recipe){
        this.recipeDetails = item;

    }
}