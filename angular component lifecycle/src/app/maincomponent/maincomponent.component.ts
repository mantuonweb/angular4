import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {
//https://angular.io/guide/lifecycle-hooks
/**
ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
Child content init
Child ngAfterContentInit
Child ngAfterContentChecked
Child ngAfterViewInit
Child ngAfterViewChecked
ngAfterViewInit
ngAfterViewChecked
ngDoCheck
ngAfterContentChecked
Child ngAfterContentChecked
Child ngAfterViewChecked
ngAfterViewChecked

*/
  @Input('myprop') myprop:string="";
  eventlist:any[]=[];
  constructor(){
  	this.eventlist.push("Constructor");
  }
  
  ngOnChanges(){
  	this.eventlist.push("ngOnChanges");
  	console.log("ngOnChanges");
  }
  ngOnInit(){
  	this.eventlist.push("ngOnInit");
  	console.log("ngOnInit");
  }
  ngDoCheck(){
  	this.eventlist.push("ngDoCheck");
  	console.log("ngDoCheck");
  }
  ngAfterContentInit(){
  	this.eventlist.push("ngAfterContentInit");
  	console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
  	this.eventlist.push("ngAfterContentChecked");
  	console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
  	this.eventlist.push("ngAfterViewInit");
  	console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
  	this.eventlist.push("ngAfterViewChecked");
  	console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
  	this.eventlist.push("ngOnDestroy");
  	console.log("ngOnDestroy");
  }
}
