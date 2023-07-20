import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from './InsuranceInterface';



@Component({
  selector: 'app-insurances',
  templateUrl: './insurance.component.html',
  styleUrls: ['../../styles/cardTemplate.scss', '../../styles/general.scss', './insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  allEntries: Insurance[] = [];
  isDetail = false;
  isTile = true;
  isList = false;
  classLayout = 'asCard g-padding';
  container = 'tileContainer';
  assetLi = 'assets/tiles.png';
  dashOffset: string = '200';


  constructor(private httpClient: HttpClient, private elementRef: ElementRef, private renderer: Renderer2) {}

  fetchEntries() {
    this.httpClient.get<Insurance[]>('/api/insurance').subscribe(allEntries => {
      this.allEntries = allEntries;
    });
  }

  ngOnInit(): void {
    this.fetchEntries();
    this.changeCSS();
  }
  changeCSS() {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.renderer.setStyle(element, 'stroke-dashoffset', '10');
  }

  setLayout() {
    this.isTile = !this.isTile;
    this.isList = !this.isList;

    if (this.isTile) {
      this.classLayout = 'asCard g-padding';
      this.container = 'tileContainer';
      this.assetLi = 'assets/tiles.png';
    } else {
      this.classLayout = 'asListElement g-padding g-flex';
      this.container = 'listContainer';
      this.assetLi = 'assets/list.png';
    }
  }
}
