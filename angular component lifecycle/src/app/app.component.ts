import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //https://angular.io/guide/lifecycle-hooks
  title = 'app';
  prop1='Hello World';
  constructor(){
  }
}
