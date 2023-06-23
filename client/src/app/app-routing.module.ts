import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BudgetBookComponent} from "./budget-book/budget-book.component";
import {CashflowCardComponent} from "./cashflow-card/cashflow-card.component";
import {CashflowDetailComponent} from "./cashflow-detail/cashflow-detail.component";
import {ButtonComponent} from "./button/button.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";


const routes: Routes = [
  {path:"budgetBook", component:BudgetBookComponent},
  {path:"cashflow-card", component:CashflowCardComponent},
  {path:"cashflow-detail", component:CashflowDetailComponent},
  {path:"button", component:ButtonComponent},
  {path:"registration", component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
