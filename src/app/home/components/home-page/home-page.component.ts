import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {homePageLoad} from '../../actions';

@Component({
  selector: 'arrisca-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'Arrrisca Chat';

  constructor(private homePageStore: Store) {
    homePageStore.dispatch(homePageLoad({appName: this.title}));
  }
}
