import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateDrivenModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
