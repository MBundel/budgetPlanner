import { Component, Input } from '@angular/core';
import { Entry, EntryList } from "../budget-book/budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-card',
  templateUrl: './cashflow-card.component.html',
  styleUrls: ['./cashflow-card.component.css']
})
export class CashflowCardComponent {
  @Input() entryList?: EntryList;
  showEntryList: boolean = false;
  showDiv = false;
  debitValue: boolean = false;

  constructor() {}

  ngOnChanges() {
    if (this.entryList && this.entryList.value.length > 0) {
      this.debitValue = this.entryList.value[0].debit;
    }
  }

  toggleEntryList() {
    this.showEntryList = !this.showEntryList;
  }
}
