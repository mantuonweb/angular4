import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myinputcomponent',
  templateUrl: './myinputcomponent.component.html',
  styleUrls: ['./myinputcomponent.component.css']
})
export class MyinputcomponentComponent implements OnInit {
  @Input('myprop') myprop:string="";
  @Input('mylist') mylist;
  constructor() { }

  ngOnInit() {
  	console.log("Child :: ngOnInitS");
  }
  ngOnChanges(){
  	
  }
  ngAfterContentInit(){
  	console.log("Child :: ngAfterContentInit");
  }
  ngAfterContentChecked(){
  	console.log("Child :: ngAfterContentChecked");
  }
  ngAfterViewInit(){
  	console.log("Child :: ngAfterViewInit");
  }
  ngAfterViewChecked(){
  	console.log("Child :: ngAfterViewChecked");
  }

}
