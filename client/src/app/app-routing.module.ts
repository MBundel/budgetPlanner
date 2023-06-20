import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BudgetBookComponent} from "./budget-book/budget-book.component";
import {CashflowcardComponent} from "./cashflowcard/cashflowcard.component";




const routes: Routes = [
  {path:"budgetBook", component:BudgetBookComponent},
  {path:"cashflowcard", component:CashflowcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
