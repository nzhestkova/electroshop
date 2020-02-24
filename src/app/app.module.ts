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
import { EditPersonalDataComponent } from "./components/user-page/edit-personal-data/edit-personal-data.component";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { ShowPasswordDirective } from "./directives/show-password/show-password.directive";
import { UserService } from "./services/new-user-service/user.service";
import { appReducers } from "./store/reducers/app.reducers";
import { BasketPageComponent } from './components/basket-page/basket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
    UserPageComponent,
    EditPersonalDataComponent,
    ShowPasswordDirective,
    LoginComponent,
    NewRegisterComponent,
    BasketPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      }
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
