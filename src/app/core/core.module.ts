import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppInterceptorService} from '@core/services/app-interceptor.service';
import {ErrorLogService} from '@core/services/error-log.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ErrorLogService,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true},
    {provide: ErrorHandler, useClass: ErrorLogService}
  ]
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
