import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  ngOnInit(): void {
  }

}
/*
@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="getButtonClass()" (click)="handleButtonClick()">{{ buttonText }}</button>
  `
})
export class ButtonComponent {
  @Input() buttonType: ButtonType = ButtonType.Primary;
  @Input() buttonText: string = 'Click me';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  getButtonClass(): string {
    return `btn btn-${this.buttonType}`;
  }

  handleButtonClick(): void {
    this.buttonClick.emit();
  }
}
 */
