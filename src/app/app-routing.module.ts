import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasketPageComponent } from "./components/basket-page/basket-page.component";
import { ClearBasketPopupComponent } from "./components/clear-basket-popup/clear-basket-popup.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "popup", component: ClearBasketPopupComponent },
  { path: "basket", component: BasketPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
