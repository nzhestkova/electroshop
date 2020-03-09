import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasketPageComponent } from "./components/basket-page/basket-page.component";
import { ClearBasketPopupComponent } from "./components/clear-basket-popup/clear-basket-popup.component";
import { InfoComponent } from "./components/info/info.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PopupAddPurchaseComponent } from "./components/popup-add-purchase/popup-add-purchase.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";
import { ShowPasswordDirective } from "./directives/password/show-password.directive";
import { BasketStoreService } from "./services/basket-store/basket-store.service";
import { ProductService } from "./services/products/product.service";
import { UserStoreService } from "./services/user-store/user-store.service";
import { appReducers } from "./store/reducers/app.reducers";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PopupAddPurchaseComponent,
    BasketPageComponent,
    ClearBasketPopupComponent,
    LoginPageComponent,
    ShowPasswordDirective,
    RegisterPageComponent,
    InfoComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateSerializability: true,
            }
        }),
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [
    ProductService,
    BasketStoreService,
    UserStoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
