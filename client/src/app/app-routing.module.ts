import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import {BudgetBookComponent}        from "./sites/bugetbook/budget-book/budget-book.component";
import {CashflowCardComponent}      from "./sites/bugetbook/cashflow-card/cashflow-card.component";
import {CashflowDetailComponent}    from "./sites/bugetbook/cashflow-detail/cashflow-detail.component";
import {ButtonComponent}            from "./sites/bugetbook/button/button.component";
import {UserRegistrationComponent}  from "./sites/user-registration/user-registration.component";
import {SuccessComponent}           from "./sites/user-registration/success/success.component";
import {LoginComponent}             from "./sites/login/login.component";
import {SessionComponent}           from "./services/session/session.component";
import {HomeComponent}              from "./sites/home/home.component";
import {GoalPlannerComponent}       from "./sites/goalSite/goal-planner/goal-planner.component";
import {InsuranceComponent}       from "./sites/insurcances/insurance.component";


const routes: Routes = [
  {path:"",                         component: HomeComponent},
  {path:"budgetBook",               component: BudgetBookComponent},
  {path:"goal",                     component: GoalPlannerComponent},
  {path:"cashflow-card",            component: CashflowCardComponent},
  {path:"cashflow-detail",          component: CashflowDetailComponent},
  {path:"button",                   component: ButtonComponent},
  {path:"registration",             component: UserRegistrationComponent},
  {path:"success",                  component: SuccessComponent},
  {path:"login",                    component: LoginComponent},
  {path:"session",                  component: SessionComponent},
  {path:"insurances",               component: InsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
