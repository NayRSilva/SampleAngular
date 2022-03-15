import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient("chocolate", 3),
    new Ingredient("egg", 2)
  ] ;

  checkArray = new Subject<Ingredient[]>();
  arrayChanged = this.checkArray.asObservable();

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.checkArray.next(this.ingredients.slice());
  }


}
