import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Entry } from "../goalInterfaces";
import { CalculateService } from "../../../services/calculate.service";

@Component({
  selector: 'app-goal-planner',
  templateUrl: './goal-planner.component.html',
  styleUrls: ['../../../styles/general.scss', '../../../styles/cardTemplate.scss']
})
export class GoalPlannerComponent implements OnInit {
  foreignSum: number;
  sum: number = 0;
  allEntries: Entry[] = [];

  constructor(private http: HttpClient, private calcService: CalculateService) {
    this.foreignSum = calcService.sum;
  }

  ngOnInit(): void {
    this.foreignSum = this.calcService.sum;
    this.fetchEntries();
  }

  fetchEntries(): void {
    this.http.get<Entry[]>('/api/goal').subscribe(allEntries => {
      this.allEntries = allEntries;
    });
  }

  addNewGoal(): void {
    const newGoal: Entry = {
      name: 'neues Ziel',
      cost: 1,
      deadLine: new Date().toISOString()
    };

    this.http.post('/api/goal', newGoal).subscribe(
      (response) => {
        console.log('Neues Ziel erfolgreich erstellt:', response);
        this.fetchEntries(); // Aktualisiere die Liste der Einträge nach dem Hinzufügen eines neuen Ziels
      },
      (error) => {
        console.error('Fehler beim Erstellen des neuen Ziels:', error);
      }
    );
  }
}
