import {Component, Input, OnInit} from '@angular/core';
import {Insurance} from "../InsuranceInterface";
import {HttpClient} from "@angular/common/http";
import {layoutButton} from "../../../component/button/compButton-interfaces";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.css']
})
export class InsuranceCardComponent implements OnInit{

  @Input() entry?: Insurance;
  private isEditMode:boolean = false;
  @Input() layoutData = layoutButton.tile;
  formattedEndOfContract: string = '';


  constructor(private http: HttpClient) {
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode && this.entry) {
      this.updateEntry();
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

  ngOnInit(): void {
    this.formatDeadline();
  }

  formatDeadline(): void {
    if (this.entry?.endOfContract) {
      const date = new Date(this.entry.endOfContract);
      this.formattedEndOfContract = formatDate(date, 'dd.MM.yyyy', 'en-US');
    }
  }
}
