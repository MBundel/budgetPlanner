import {Component, Input, OnInit} from '@angular/core';
import {Insurance} from '../InsuranceInterface';
import {layoutButton} from '../../../component/button/compButton-interfaces';
import {RestApiService} from "../../../services/restApi.service";

@Component({
  selector: 'app-insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.css'],
})
export class InsuranceCardComponent implements OnInit {
  @Input() entry?: Insurance;
  private isEditMode: boolean = false;
  @Input() layoutData = layoutButton.tile;
  formattedEndOfContract: string = '';

  constructor(private restApiService: RestApiService) {}

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode && this.entry) {
      // Perform any actions needed when exiting edit mode.
    }
  }

  ngOnInit(): void {
    this.formatDeadline();
  }

  async formatDeadline(): Promise<void> {
    if (this.entry?.endOfContract) {
      try {
        const date = new Date(this.entry.endOfContract);
        this.formattedEndOfContract = await this.formatDateAsync(date);
      } catch (error) {
        console.error('Error while formatting date:', error);
        this.formattedEndOfContract = 'Invalid Date';
      }
    }
  }

  private async formatDateAsync(date: Date): Promise<string> {
    return await this.restApiService.formatDateAsync(date, 'dd.MM.yyyy');
  }
}
