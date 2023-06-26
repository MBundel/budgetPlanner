import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  title = 'custom icon';

  // constructor (
  //   private matIconRegistry: MatIconRegistry,
  //   private domSanitizer: DomSanitizer
  // ) {
  //   this.matIconRegistry.addSvgIcon(
  //     'edit',
  //     this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/edit.svg')
  //   )
  //
  // }


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

