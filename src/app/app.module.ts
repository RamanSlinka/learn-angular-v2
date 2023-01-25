import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PostComponent} from "./post/post.component";
import { BaseDirectiveComponent } from './base-directive/base-directive.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BaseDirectiveComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
