import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular';
  pageOpened: string ="recipe";

  onNavigationEvent(nameComponent: string){
    this.pageOpened = nameComponent;
  }
}
