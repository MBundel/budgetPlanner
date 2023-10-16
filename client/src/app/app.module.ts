import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import {BudgetBookComponent} from "./sites/bugetbook/budget-book/budget-book.component";
import {CashflowCardComponent} from "./sites/bugetbook/cashflow-card/cashflow-card.component";
import {ButtonComponent} from "./sites/bugetbook/button/button.component";
import {UserRegistrationComponent} from "./sites/user-registration/user-registration.component";
import {LoginComponent} from "./sites/login/login.component";
import {SuccessComponent} from "./sites/user-registration/success/success.component";
import {HomeComponent} from "./sites/home/home.component";
import {CashflowDetailComponent} from "./sites/bugetbook/cashflow-detail/cashflow-detail.component";
import {SessionComponent} from "./services/session/session.component";
import { GoalCardComponent } from './sites/goalSite/goal-card/goal-card.component';
import { GoalPlannerComponent } from './sites/goalSite/goal-planner/goal-planner.component';
import { GoalComponent} from "./sites/goalSite/goal/goal.component";
import { InsuranceComponent } from './sites/insurcances/insurance.component';
import { CardTemplateComponent } from './sites/bugetbook/card-template/card-template.component';
import {NgOptimizedImage} from "@angular/common";
import { DisplayButtonComponent } from './component/button/display-button/display-button.component';
import { AddButtonCardComponent } from './component/button/add-button-card/add-button-card.component';
import {InsuranceCardComponent} from "./sites/insurcances/insurcance-card/insurance-card.component";
import { InvestmentComponent } from './sites/investment/investment.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    BudgetBookComponent,
    CashflowCardComponent,
    CashflowDetailComponent,
    ButtonComponent,
    UserRegistrationComponent,
    LoginComponent,
    SuccessComponent,
    SessionComponent,
    HomeComponent,
    GoalCardComponent,
    GoalPlannerComponent,
    InsuranceComponent,
    CardTemplateComponent,
    DisplayButtonComponent,
    AddButtonCardComponent,
    InsuranceCardComponent,
    InvestmentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    GoalComponent,
    NgOptimizedImage,
    MatTableModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
