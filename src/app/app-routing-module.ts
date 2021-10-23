import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { AddProductsComponent } from "./add-products/add-products.component";
import { AdminGuard } from "./admin.guard";
// import { DataComponent } from "./data/data.component";
// import { ChildComponent } from "./child/child.component";
import { HomeComponent } from "./home/home.component";
import { HttpclientComponent } from "./httpclient/httpclient.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { ProductComponent } from "./product/product.component";

import { ReactiveComponent } from "./reactive/reactive.component";
// import { ParentComponent } from "./parent/parent.component";
import { RegisterComponent } from "./register/register.component";
import { RegistrationformComponent } from "./registrationform/registrationform.component";
import { SiginComponent } from "./sigin/sigin.component";

const routes:Routes = [
    // {path:"child",component:ChildComponent},
    // {path:"parent",component:ParentComponent},
    // {path:"",redirectTo:"sigin",pathMatch:"full"},
    {path:"sigin",component:SiginComponent},
    {path:"register",component:RegisterComponent},
    {path:"home",component:HomeComponent},
    {path:"reactive",component:ReactiveComponent},
    {path:"httpclient",component:HttpclientComponent},
    // {path:"data",component:DataComponent},
    {path:"product",component:ProductComponent,canActivate:[AdminGuard],data:{roles:['admin','user']}},
    {path:"add-products",component:AddProductsComponent},
    {path:"loginform",component:LoginformComponent},
    {path:"registrationform",component:RegistrationformComponent}
    
    // {path:"**",redirectTo:"sigin"},
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})


export class AppRoutingModule{

}
