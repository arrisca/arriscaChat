import {ErrorHandler, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorLogService} from '@shared/services/error-log.service';
import {AppInterceptorService} from '@shared/services/app-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        ErrorLogService,
        {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true},
        {provide: ErrorHandler, useClass: ErrorLogService}
      ]
    };
  }
}
