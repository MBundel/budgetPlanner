import { Component, Input, OnInit } from '@angular/core';
import { Entry } from "../budget-book/budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-detail',
  templateUrl: './cashflow-detail.component.html',
  styleUrls: ['./cashflow-detail.component.css']
})
export class CashflowDetailComponent implements OnInit {
  @Input() entry: Entry;

  constructor() {
    this.entry = { name: '', amount: 0, category: '', isDebit: false };
  }

  ngOnInit(): void {
    // Initialisierungscode hier
  }
}
