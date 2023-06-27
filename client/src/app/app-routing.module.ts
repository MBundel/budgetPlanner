import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BudgetBookComponent} from "./budget-book/budget-book.component";
import {CashflowCardComponent} from "./cashflow-card/cashflow-card.component";
import {CashflowDetailComponent} from "./cashflow-detail/cashflow-detail.component";
import {ButtonComponent} from "./button/button.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {SuccessComponent} from "./user-registration/success/success.component";
import {GoalComponent} from "./goal/goal.component";


const routes: Routes = [
  {path:"budgetBook", component:BudgetBookComponent},
  {path:"goal", component:GoalComponent},
  {path:"cashflow-card", component:CashflowCardComponent},
  {path:"cashflow-detail", component:CashflowDetailComponent},
  {path:"button", component:ButtonComponent},
  {path:"registration", component: UserRegistrationComponent},
  {path:"success", component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
