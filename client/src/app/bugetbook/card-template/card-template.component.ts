import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['../cardTemplate.css']
})
export class CardTemplateComponent implements OnInit {
  @Input() name?: String;
  sum: number = 0;

  constructor() {

  }

  ngOnInit(): void {

  }
}
