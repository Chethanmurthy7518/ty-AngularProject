import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Basic } from './basic.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';



@NgModule({
  declarations: [
    AppComponent,
    Basic,
    LoginComponent,
    SiginComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
