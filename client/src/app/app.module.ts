import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetBookComponent } from './budget-book/budget-book.component';
import { CashflowCardComponent} from "./cashflow-card/cashflow-card.component";
import { CashflowDetailComponent } from './cashflow-detail/cashflow-detail.component';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetBookComponent,
    CashflowCardComponent,
    CashflowDetailComponent,
    ButtonComponent,
    UserRegistrationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
