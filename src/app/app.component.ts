import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentTitle="Jestem komponentem";
  clickHandler(){
    alert("Don't click me");
  }
}
