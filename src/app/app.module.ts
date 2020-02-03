import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GetUsersService } from "./get-users/get-users.service";
import { LoginPageComponent } from "./login-page/login-page.component";
import { MainPageComponent } from "./main-page/main-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
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
