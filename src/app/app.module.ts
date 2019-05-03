import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
// Ejemplo de como importar un servicio
import { Service1Service } from 'src/app/services/service1.service';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  // Ejemplo de como importar un servicio
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
