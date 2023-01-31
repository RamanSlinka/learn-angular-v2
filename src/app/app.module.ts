import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostComponent} from "./post-main/post/post.component";
import { BaseDirectiveComponent } from './base-directive/base-directive.component';
import { PostFormComponent } from './post-main/post-form/post-form.component';
import { PostMainComponent } from './post-main/post-main.component';
import { StyleDirective } from './directives/style.directive';
import { IfNotDirective } from './directives/if-not.directive';
import { DetailDirectiveComponent } from './detail-directive/detail-directive.component';
import { DetailPipesComponent } from './detail-pipes/detail-pipes.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import {FormsReactiveComponent} from "./forms-reactive/forms-reactive.component";
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BaseDirectiveComponent,
    PostFormComponent,
    PostMainComponent,
    StyleDirective,
    IfNotDirective,
    DetailDirectiveComponent,
    DetailPipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    LifecycleHooksComponent,
    FormsReactiveComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
