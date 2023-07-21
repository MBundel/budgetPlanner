import { Component, EventEmitter, Output } from '@angular/core';
import { layoutButton } from '../compButton-interfaces';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styleUrls: ['../../../styles/general.scss', '../../../styles/cardTemplate.scss']
})
export class DisplayButtonComponent {
  @Output() layoutChanged = new EventEmitter<any>(); // Emit the updated layout data
  layoutData = layoutButton.tile;

  setLayout() {
    this.layoutData = this.layoutData === layoutButton.tile ? layoutButton.list : layoutButton.tile;

    // Emit the updated layout data to the parent component
    this.layoutChanged.emit(this.layoutData);
  }
}
