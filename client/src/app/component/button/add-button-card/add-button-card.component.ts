import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button-card',
  templateUrl: './add-button-card.component.html',
  styleUrls: ['../../../styles/cardTemplate.scss']
})
export class AddButtonCardComponent {
  @Output() onNewGoal: EventEmitter<void> = new EventEmitter<void>();

  addNewGoal() {
    this.onNewGoal.emit();
  }
}
