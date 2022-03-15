import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output("navigationEvent") navigationEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  openRecipes(){

    this.navigationEmitter.emit("recipe");
  }

  openList(){

    this.navigationEmitter.emit("shopping");
  }

}
