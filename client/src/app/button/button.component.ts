import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CalculateService} from "../calculate.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [CalculateService]
})
export class ButtonComponent implements OnInit {
  @Input() name: string = 'NoUse';
  @Input() id: number = 0;

  private baseUrl = '/api/budgetbook';

  constructor(private http: HttpClient, private calcService: CalculateService) {

  }

  ngOnInit(): void {}

  handleClick(entryId: number): void {
    if (this.name === 'delete') {
      this.deleteEntry(entryId).subscribe(
        () => {
          // Erfolgreiche Löschung - Lade die Daten neu
          this.loadData();
        },
        error => {
          // Fehler bei der Löschung - Behandle den Fehler entsprechend
        }
      );
    }
  }

  deleteEntry(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  loadData(): void {
   // this.calcService.fetchEntries();
   window.location.reload();
  }
}
