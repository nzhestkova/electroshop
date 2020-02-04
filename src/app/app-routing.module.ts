import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";
import { ShopcartPageComponent } from "./shopcart-page/shopcart-page.component";


const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterComponent },
  { path: ":id", component: MainPageComponent},
  { path: ":id/logout", redirectTo: "/" },
  { path: "shopcart", component: ShopcartPageComponent },
  { path: ":id/shopcart", component: ShopcartPageComponent },
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
