import { Component, Input, OnInit } from '@angular/core';
import {  EntryList } from "../budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-card',
  templateUrl: './cashflow-card.component.html',
  styleUrls: ['../../styles/cardTemplate.css']
})
export class CashflowCardComponent implements OnInit {
  @Input() entryList?: EntryList;
  showEntryList: boolean = false;
  showNewCard = false;
  debitValue: boolean = false;
  sum: number = 0;

  constructor() { }

  ngOnInit() {
    this.getSum();
  }

  ngOnChanges() {
    if (this.entryList && this.entryList.value.length > 0) {
      this.debitValue = this.entryList.value[0].debit;
    }
  }

  toggleEntryList() {
    this.showEntryList = !this.showEntryList;
  }

  getSum() {
    if (this.entryList && this.entryList.value) {
      for (const entry of this.entryList.value) {
        this.sum += entry.amount;
      }
    }
  }
}
