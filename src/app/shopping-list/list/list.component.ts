import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ingredients: Array<Ingredient>;
  changedIngredient: any;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.changedIngredient = this.shoppingListService.checkArray
    this.changedIngredient.subscribe({
      next: (ingredients)=>{
        this.ingredients = ingredients;

      }
    })

  }


}
