import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './common/material.module';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { MicroservicesButtonComponent } from './microservices-button/microservices-button.component';

export const webComponents = [
  MicroservicesButtonComponent,
  AppComponent
];


@NgModule({
  declarations: [
    ...webComponents,
    MicroservicesButtonComponent,
  ],
  entryComponents: [
    ...webComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LocationStrategy, useClass: MockLocationStrategy }
  ],
})
export class AppModule {
  ngDoBootstrap() { }
}
