import { Component, Input, OnInit } from '@angular/core';
import { Entry, EntryList } from "../budget-book/budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-card',
  templateUrl: './cashflow-card.component.html',
  styleUrls: ['./cashflow-card.component.css']
})
export class CashflowCardComponent {
  @Input() entryList?: EntryList;
  showEntryList: boolean = false;

  constructor() {}



  toggleEntryList() {
    this.showEntryList = !this.showEntryList;
  }
}
