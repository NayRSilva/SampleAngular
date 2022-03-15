import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(name:string, amount:number){
    console.log("adding")
    let myIngredient = new Ingredient(name, amount);
    this.slService.addIngredient(myIngredient);
  }
}
