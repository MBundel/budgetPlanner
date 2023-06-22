import {Component, OnInit} from '@angular/core';
import {Entry} from "./budgetBookInterfaces";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-budget-book',
  templateUrl: './budget-book.component.html',
  styleUrls: ['./budget-book.component.css']
})
export class BudgetBookComponent implements OnInit{
  entries: Entry[] = [];

  newEntry: Entry = {name:'', amount: 0, category:''};

  constructor(private  http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Entry[]>('/api/budgetbook').subscribe(e => this.entries = e);
  }
  save() {
    this.http.post<Entry[]>('/api/budgetbook', this.newEntry).subscribe(e => this.entries = e);
  }

}
