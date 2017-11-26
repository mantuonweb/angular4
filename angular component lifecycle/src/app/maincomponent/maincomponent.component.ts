import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { MyinputcomponentComponent } from './../myinputcomponent/myinputcomponent.component';

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
  @ViewChild(MyinputcomponentComponent) viewChild:MyinputcomponentComponent;
  prop1:string="";
  prevchildproperty="";
  alertmessage="";
  eventlist:any[]=[];
  constructor(){
  	this.eventlist.push("Constructor");
    console.log(this.viewChild && this.viewChild.childproperty);
  }
  
  ngOnChanges(){
  	this.eventlist.push("ngOnChanges::[@input] only");
  	console.log("ngOnChanges");
  }
  ngOnInit(){
  	this.eventlist.push("ngOnInit");
  	console.log("ngOnInit");
    console.log(this.viewChild && this.viewChild.childproperty);
    //console.log(this.viewChild.childproperty);
  }
  ngDoCheck(){
  	//only one method should be there
  	//ngDoCheck=ngOnChange + more means override;
  	this.eventlist.push("ngDoCheck::[*] changes");
  	console.log("ngDoCheck");
  }
  ngAfterContentInit(){
  	this.eventlist.push("ngAfterContentInit");
  	console.log("ngAfterContentInit");
    //console.log(this.viewChild.childproperty);
  }
  ngAfterContentChecked(){
  	this.eventlist.push("ngAfterContentChecked");
  	console.log("ngAfterContentChecked");
    //console.log(this.viewChild.childproperty);
  }
  ngAfterViewInit(){

    //viewChild is set after the view has been initialized
  	this.eventlist.push("ngAfterViewInit");
  	console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
  	this.eventlist.push("ngAfterViewChecked");
  	console.log("ngAfterViewChecked");
    if (this.prevchildproperty === this.viewChild.childproperty) {
      console.log('AfterViewChecked (no change)');
    } else {
      this.prevchildproperty=this.viewChild.childproperty;
      console.log('AfterViewChecked');
      this.doSomething();
    }

  }
  ngOnDestroy(){
  	this.eventlist.push("ngOnDestroy");
  	console.log("ngOnDestroy");
  }


  //other method
  private doSomething() {
    let c = this.viewChild.childproperty.length > 10 ? `That's a long name` : '';
    this.alertmessage=c;
  }
}
