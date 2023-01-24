import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PostComponent} from "./post/post.component";
import { Post2Component } from './post2/post2/post2.component';
import { Post3Component } from './post3/post3.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component

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
