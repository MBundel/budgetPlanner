import { Component, OnInit } from '@angular/core';
import { Entry } from "./budgetBookInterfaces";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-budget-book',
  templateUrl: './budget-book.component.html',
  styleUrls: ['./budget-book.component.css']
})
export class BudgetBookComponent implements OnInit {
  debitEntriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  nonDebitEntriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  entriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  newEntry: Entry = { name: '', amount: 0, category: '', isDebit: false };


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Map<string, Entry[]>>('/api/budgetbook/isDebit').subscribe(debitEntriesByCategory => {
      this.debitEntriesByCategory = debitEntriesByCategory;

    });

    this.http.get<Map<string, Entry[]>>('/api/budgetbook/isNotDebit').subscribe(nonDebitEntriesByCategory => {
      this.nonDebitEntriesByCategory = nonDebitEntriesByCategory;
    });
  }

  save() {
    this.http.post<Map<string, Entry[]>>('/api/budgetbook', this.newEntry).subscribe(entriesByCategory => {
      this.entriesByCategory = entriesByCategory;
    });
  }
}
