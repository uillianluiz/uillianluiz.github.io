import { Component } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { routerTransition, routerTransitionSlide, routerTransitionReverse } from './animation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition('home => portfolio', routerTransition),
      transition('* => home', routerTransition),
      transition('portfolio => project', routerTransitionSlide),
      transition('project => portfolio', routerTransitionReverse)
    ])
  ]
})
export class AppComponent {
  title = 'app';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
