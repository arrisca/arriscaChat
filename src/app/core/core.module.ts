import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppNavbarComponent} from './components/app-navbar/app-navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {AppUnlessDirective, HighlightDirective} from '@core/directives';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [AppNavbarComponent, AppUnlessDirective, HighlightDirective],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AppNavbarComponent,
    AppUnlessDirective,
    HighlightDirective
  ],
  providers: []
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('Core Module is already loaded, please load it only in AppModule!!');
    }
  }
}
