import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import {BudgetBookComponent} from "./budget-book/budget-book.component";
import {CashflowCardComponent} from "./cashflow-card/cashflow-card.component";
import {ButtonComponent} from "./button/button.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {LoginComponent} from "./login/login.component";
import {SuccessComponent} from "./user-registration/success/success.component";
import {HomeComponent} from "./home/home.component";
import {CashflowDetailComponent} from "./cashflow-detail/cashflow-detail.component";

import {SessionComponent} from "./session/session.component"; // Import NgbModule from ng-bootstrap

import {
  bootstrapApplication
} from '@angular/platform-browser';
import { GoalCardComponent } from './goalSite/goal-card/goal-card.component';
import { GoalPlannerComponent } from './goalSite/goal-planner/goal-planner.component';
import {GoalComponent} from "./goalSite/goal/goal.component";


// bootstrapApplication(AppComponent);
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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    GoalComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
