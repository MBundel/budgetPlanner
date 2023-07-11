import { Component, OnInit } from '@angular/core';
import { Entry } from "./budgetBookInterfaces";
import { HttpClient } from "@angular/common/http";
import { CalculateService } from "../calculate.service";
import {tick} from "@angular/core/testing";

@Component({
  selector: 'app-budget-book',
  templateUrl: './budget-book.component.html',
  styleUrls: ['./budget-book.component.css'],
  providers: [CalculateService]
})
export class BudgetBookComponent implements OnInit {
  debitEntriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  nonDebitEntriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  entriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  newEntry: Entry = { name: '', amount: 0, category: '', debit: false, id: 0 };
  sum: number = 0;
  showNewDebit: boolean = false;
  showNewCredit: boolean = false;

  constructor(private http: HttpClient, private calcService: CalculateService) {
    this.entriesByCategory = this.calcService.entriesByCategory;
    this.debitEntriesByCategory = this.calcService.isDebitMap;
    this.nonDebitEntriesByCategory = this.calcService.notDebitMap;
  }

  getSum() {
    this.sum = this.calcService.sum
    return this.sum;
  }

  ngOnInit(): void {


  }

  save() {
    this.http.post<Map<string, Entry[]>>('/api/budgetbook', this.newEntry).subscribe(entriesByCategory => {
      this.entriesByCategory = entriesByCategory;
    });
  }

  // protected readonly tick = tick;
}
