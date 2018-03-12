import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgendaModule } from './app/app.module';
import { AgendaComponent } from './app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgendaModule
  ],
  bootstrap: [AgendaComponent]
})
export class BootstrapModule {}

platformBrowserDynamic().bootstrapModule(BootstrapModule);