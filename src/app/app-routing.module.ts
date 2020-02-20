import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login-page/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NewRegisterComponent } from "./components/new-register/new-register.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ShopcartPageComponent } from "./components/shopcart-page/shopcart-page.component";
import { UserPageComponent } from "./components/user-page/user-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: NewRegisterComponent },
  { path: "profile", component: UserPageComponent },
  { path: "shopcart", component: ShopcartPageComponent },
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
