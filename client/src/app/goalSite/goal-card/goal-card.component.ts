import { Component, Input, OnInit } from '@angular/core';
import { Entry } from "../goalInterfaces";
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {
  @Input() entry?: Entry;
  isEditMode: boolean = false;
  formattedDeadline: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.formatDeadline();
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode && this.entry) {
      this.updateEntry();
    }
  }

  formatDeadline(): void {
    if (this.entry?.deadLine) {
      const date = new Date(this.entry.deadLine);
      this.formattedDeadline = formatDate(date, 'dd.MM.yyyy', 'en-US');
    }
  }

  updateEntry(): void {
    if (!this.entry?.id) {
      return;
    }
    this.http.put(`/api/goal/${this.entry.id}`, this.entry).subscribe(
      (response) => {
        console.log('Eintrag erfolgreich aktualisiert:', response);
      },
      (error) => {
        console.error('Fehler beim Aktualisieren des Eintrags:', error);
      }
    );
  }
}
