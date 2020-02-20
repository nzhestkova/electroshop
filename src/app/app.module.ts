import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login-page/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NewRegisterComponent } from "./components/new-register/new-register.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ShopcartPageComponent } from "./components/shopcart-page/shopcart-page.component";
import { EditPersonalDataComponent } from "./components/user-page/edit-personal-data/edit-personal-data.component";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { ShowPasswordDirective } from "./directives/show-password/show-password.directive";
import { UserService } from "./services/new-user-service/user.service";
import { appReducers } from "./store/reducers/app.reducers";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShopcartPageComponent,
    PageNotFoundComponent,
    UserPageComponent,
    EditPersonalDataComponent,
    ShowPasswordDirective,
    LoginComponent,
    NewRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
