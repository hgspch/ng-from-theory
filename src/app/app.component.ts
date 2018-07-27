import { Component, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'carousel-item',
  template: `
<div class="carousel-item{{this.addActiveClass ? ' active' : ''}}">
   <ng-content></ng-content>
</div>
`
})
export class CarouselItemComponent {
  //TODO: Show the content in this carousel

  @Input()
  public addActiveClass: boolean;
}

@Component({
  selector: 'carousel',
  template: `<div id="carouselExampleControls" 
  class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <ng-content></ng-content>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> 
</div> 
`
})
export class CarouselComponent implements AfterContentInit {
  @Input()
  public delay: number;

  ngAfterContentInit() {
    //TODO: maybe use the setInterval function to call a function every x milliseconds?
  }
}

//TODO: Take a look at the markup below to see how you might implement this?
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
