import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { BudgetBookComponent } from './budget-book/budget-book.component';
import { CashflowCardComponent} from "./cashflow-card/cashflow-card.component";
import { CashflowDetailComponent } from './cashflow-detail/cashflow-detail.component';
import { ButtonComponent } from './button/button.component';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { SuccessComponent } from './user-registration/success/success.component';





@NgModule({
  declarations: [
    AppComponent,
    BudgetBookComponent,
    CashflowCardComponent,
    CashflowDetailComponent,
    ButtonComponent,
    UserRegistrationComponent,
    LoginComponent,
    ServicesComponent,
    SuccessComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
