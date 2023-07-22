// add-button-card.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button-card',
  templateUrl: './add-button-card.component.html',
  styleUrls: ['../../../styles/cardTemplate.scss']
})
export class AddButtonCardComponent {
  @Output() onNewGoal: EventEmitter<void> = new EventEmitter<void>();
  @Output() onNewInsurance: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    if (this.onNewGoal.observers.length > 0) {
      this.onNewGoal.emit();
    } else if (this.onNewInsurance.observers.length > 0) {
      this.onNewInsurance.emit();
    }
  }
}
