import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddressesComponent } from "./register/forms/addresses/addresses.component";
import { CheckInformationComponent } from "./register/forms/check-information/check-information.component";
import { ContactsComponent } from "./register/forms/contacts/contacts.component";
import { PersonalInformationComponent } from "./register/forms/personal-information/personal-information.component";
import { RegisterComponent } from "./register/register.component";
import { ShopcartPageComponent } from "./shopcart-page/shopcart-page.component";
import { UserPageComponent } from "./user-page/user-page.component";


const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterComponent, children: [
      {path: "personal", component: PersonalInformationComponent},
      { path: "contacts", component: ContactsComponent },
      { path: "addresses", component: AddressesComponent },
      { path: "check", component: CheckInformationComponent },
    ] },
  { path: "shopcart", component: ShopcartPageComponent },
  { path: ":id", component: MainPageComponent},
  { path: ":id/logout", redirectTo: "/" },
  { path: ":id/shopcart", component: ShopcartPageComponent },
  { path: ":id/profile", component: UserPageComponent },
  { path: ":id/profile/logout", redirectTo: "/" },
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
