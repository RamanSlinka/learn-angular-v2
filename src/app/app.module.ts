import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PostComponent} from "./post-main/post/post.component";
import { BaseDirectiveComponent } from './base-directive/base-directive.component';
import { PostFormComponent } from './post-main/post-form/post-form.component';
import { PostMainComponent } from './post-main/post-main.component';
import { StyleDirective } from './directives/style.directive';
import { IfNotDirective } from './directives/if-not.directive';
import { DetailDirectiveComponent } from './detail-directive/detail-directive.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BaseDirectiveComponent,
    PostFormComponent,
    PostMainComponent,
    StyleDirective,
    IfNotDirective,
    DetailDirectiveComponent

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
