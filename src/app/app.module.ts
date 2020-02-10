import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ValidationErrorComponent } from "./login-page/validation/validation-error/validation-error.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";
import { GetUsersService } from "./services/get-users/get-users.service";
import { ShopcartPageComponent } from "./shopcart-page/shopcart-page.component";
import { ShowPasswordDirective } from "./show-password/show-password.directive";
import { EditPersonalDataComponent } from "./user-page/edit-personal-data/edit-personal-data.component";
import { UserPageComponent } from "./user-page/user-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    ShopcartPageComponent,
    PageNotFoundComponent,
    RegisterComponent,
    UserPageComponent,
    EditPersonalDataComponent,
    ShowPasswordDirective,
    ValidationErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [GetUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
