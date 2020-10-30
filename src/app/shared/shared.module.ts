import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorLogService} from '@shared/services/error-log.service';
import {AppInterceptorService} from '@shared/services/app-interceptor.service';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  providers: [
    ErrorLogService,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true},
    {provide: ErrorHandler, useClass: ErrorLogService}
  ],
  exports: [MATERIAL_MODULES]
})
export class SharedModule {
}
