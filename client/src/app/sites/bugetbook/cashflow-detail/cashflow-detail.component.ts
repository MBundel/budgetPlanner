import { Component, Input } from '@angular/core';
import { Entry } from "../budgetBookInterfaces";

@Component({
  selector: 'app-cashflow-detail',
  templateUrl: './cashflow-detail.component.html',
  styleUrls: ['./cashflow-detail.component.scss']
})
export class CashflowDetailComponent {
  @Input() entry: Entry;
  @Input() category?: string;
  @Input() debit?: boolean;
  showButtonContainer: boolean = false;
  @Input() isEditing?: boolean ;


  constructor() {
    this.entry = { name: '', amount: 0, category: '', debit: false , id:0};
  }



}
