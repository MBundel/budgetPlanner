import { Entry } from "./budget-book/budgetBookInterfaces";
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalculateService implements OnInit {
  debitEntriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  categorySums?: Map<string, number>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Map<string, Entry[]>>('/api/budgetbook/isDebit').subscribe(debitEntriesByCategory => {
      this.debitEntriesByCategory = debitEntriesByCategory;
      this.calculateDebits(); // Aufruf der Methode innerhalb des Subscribe-Blocks
    });
  }

  calculateDebits(): void {
    const categorySums: Map<string, number> = new Map<string, number>();

    this.debitEntriesByCategory.forEach((entries: Entry[], category: string) => {
      const sum = entries.reduce((total: number, entry: Entry) => total + entry.amount, 0);
      categorySums.set(category, sum);
    });

    console.log(categorySums); // Ausgabe der Kategoriesummen (optional)
  }
}
