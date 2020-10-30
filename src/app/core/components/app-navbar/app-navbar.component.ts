import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {HomePageState} from '../../../home/reducers/home-page.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'arrisca-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  title$: Observable<string>;
  userName = 'Amit Sharma';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store) {
    this.title$ = store.select((state: { HomePage: HomePageState }) => {
      return state.HomePage.appName;
    });
  }

  logout(): void {
  }
}
