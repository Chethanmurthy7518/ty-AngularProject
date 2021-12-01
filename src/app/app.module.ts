import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Basic } from './basic.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProjectComponent } from './project/project.component';
import { Project1Component } from './project1/project1.component';
import { AppRoutingModule } from './app-routing-module';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// import { RouterModule,Routes } from '@angular/router';

import { ReactiveComponent } from './reactive/reactive.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ProductComponent } from './product/product.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component'
import { AuthorizationInterceptor } from './interseptors/authorization-interceptor';

// import { DataComponent } from './data/data.component';





@NgModule({
  declarations: [
    AppComponent,
    Basic,
    LoginComponent,
    SiginComponent,
    ParentComponent,
    ChildComponent,
    ProjectComponent,
    Project1Component,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    ReactiveComponent,
    HttpclientComponent,
    ProductComponent,
    AddProductsComponent,
    LoginformComponent,
    RegistrationformComponent,
    
    // DataComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
