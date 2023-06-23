import { Component, OnInit } from '@angular/core';
import { Entry } from "../budget-book/budgetBookInterfaces";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cashflow-card',
  templateUrl: './cashflow-card.component.html',
  styleUrls: ['./cashflow-card.component.css']
})
export class CashflowCardComponent implements OnInit {
  entries: Entry[] = [];
  newEntry: Entry = { name: '', amount: 0, category: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Map<string, Entry[]>>('/api/budgetbook').subscribe(entriesByCategory => {
      // entriesByCategory ist der Rückgabewert der Map aus der API

      // Beispiel: Iteration über die Kategorien und Zuordnung der Einträge
      this.entries = [];
      entriesByCategory.forEach((value) => {
        this.entries.push(...value);
      });
    });
  }

  save() {
    this.http.post<Entry[]>('/api/budgetbook', this.newEntry).subscribe(entries => {
      this.entries = entries;

      // Weitere Verarbeitung der Einträge nach dem Speichern...
    });
  }
}
