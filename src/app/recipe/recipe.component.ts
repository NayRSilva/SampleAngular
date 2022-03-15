import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';


@Component({
    selector: 'recipe-component',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit{
    recipeDetails: Recipe = null;
    recipeWatcher: any;

    constructor(private recipeService: RecipeService){

    }
    
    ngOnInit(): void {

        this.recipeWatcher = this.recipeService.getChangedObservable();
        
        this.recipeWatcher.subscribe({
            next: (recipe) =>{
                console.log("sub", recipe)
                
                this.recipeDetails = recipe;


            }
        })
        
    }



    deleteDetails(item:Recipe){
        this.recipeDetails = null;
    }
}