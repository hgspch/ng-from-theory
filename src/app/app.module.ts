import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, CarouselItemComponent, CarouselComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselItemComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
