import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyinputcomponentComponent } from './myinputcomponent/myinputcomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MyinputcomponentComponent,
    MaincomponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
