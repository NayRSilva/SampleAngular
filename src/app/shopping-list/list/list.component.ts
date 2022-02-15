import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("chocolate", 3),
    new Ingredient("egg", 2)
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

  onAddedItem(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
