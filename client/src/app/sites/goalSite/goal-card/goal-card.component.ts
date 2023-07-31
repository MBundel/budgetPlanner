import {Component, Input, OnInit} from '@angular/core';
import {GoalEntry} from "../goalInterfaces";
import {formatDate} from '@angular/common';
import {RestApiService} from "../../../services/restApi.service";


@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['../../../styles/cardTemplate.scss', '../../../styles/general.scss']
})
export class GoalCardComponent implements OnInit {
  @Input() entry?: GoalEntry;
  isEditMode: boolean = false;
  formattedDeadline: string = '';
  monthAhead: any = 0;
  today: Date = new Date(Date.now());

  savingRatio: number = 0;


  constructor(private apiService: RestApiService) {
  }

  ngOnInit(): void {
    this.formatDeadline();

  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode && this.entry) {
      this.apiService.putData(this.entry.id, 'goal', this.entry).subscribe(response => {
      });
    }
  }

  deleteEntry(): void {
    if (this.entry) {
      this.apiService.deleteData(this.entry.id, 'goal').subscribe(response => {

      });
    }
  }

  formatDeadline(): void {
    if (this.entry?.deadLine) {
      const date = new Date(this.entry.deadLine);
      this.formattedDeadline = formatDate(date, 'dd.MM.yyyy', 'en-US');

      let monthNum = Math.floor((date.getTime() - this.today.getTime()) / (1000 * 60 * 60 * 24 * 30.44))

      if (monthNum < 0) {
          this.monthAhead = 0
          this.savingRatio = 0;

      } else {
          this.monthAhead = monthNum;
          this.savingRatio = Math.round(this.entry.cost / monthNum);
      }
    }
  }


}
