import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BudgetBookComponent} from "./budget-book/budget-book.component";




const routes: Routes = [
  {path:"budgetBook", component:BudgetBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
