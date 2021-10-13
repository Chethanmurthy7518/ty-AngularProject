import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Basic } from './basic.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProjectComponent } from './project/project.component';
import { Project1Component } from './project1/project1.component';



@NgModule({
  declarations: [
    AppComponent,
    Basic,
    LoginComponent,
    SiginComponent,
    ParentComponent,
    ChildComponent,
    ProjectComponent,
    Project1Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
