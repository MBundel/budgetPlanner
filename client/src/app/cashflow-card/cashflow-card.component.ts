import { Component, Input, OnInit } from '@angular/core';
import {Entry, EntryList} from "../budget-book/budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-card',
  templateUrl: './cashflow-card.component.html',
  styleUrls: ['./cashflow-card.component.css']
})
export class CashflowCardComponent implements OnInit {
  @Input() entryList?: EntryList;

  constructor() {}

  ngOnInit(): void {
  }
}
