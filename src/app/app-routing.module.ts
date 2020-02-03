import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainPageComponent } from "./main-page/main-page.component";


const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: ":login", component: MainPageComponent},
  // { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
