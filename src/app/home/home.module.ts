import {NgModule} from '@angular/core';
import * as homePageReducer from './reducers/home-page.reducer';
import {homePageFeatureKey} from './reducers/home-page.reducer';

import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {StoreModule} from '@ngrx/store';
import {CoreModule} from '@core/core.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    StoreModule.forFeature(homePageFeatureKey, homePageReducer.reducer)
  ]
})
export class HomeModule {
}
