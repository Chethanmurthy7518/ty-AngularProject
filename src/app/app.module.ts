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



@NgModule({
  declarations: [
    AppComponent,
    Basic,
    LoginComponent,
    SiginComponent,
    ParentComponent,
    ChildComponent,
    ProjectComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
