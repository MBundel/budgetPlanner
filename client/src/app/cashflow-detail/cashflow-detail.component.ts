import { Component, Input } from '@angular/core';
import { Entry } from "../budget-book/budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-detail',
  templateUrl: './cashflow-detail.component.html',
  styleUrls: ['./cashflow-detail.component.css']
})
export class CashflowDetailComponent {
  @Input() entry: Entry;

  constructor() {
    this.entry = { name: '', amount: 0, category: '', debit: false , id:0};
  }


}
