import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Insurance} from "./InsuranceInterface";

@Component({
  selector: 'app-insurcances',
  templateUrl: './insurance.component.html',
  styleUrls: ['../styles/cardTemplate.css', '../styles/general.css']
})
export class InsuranceComponent implements OnInit {
  allEntries: Insurance[] = [];
  isDetail: boolean = false;
  isTile: boolean = true;
  isList: boolean = false;
  classLayout: String = "asCard g-padding";
  container: String = 'tileContainer';

  constructor(private httpClient: HttpClient) {}

  fetchEntries() {
    this.httpClient.get<Insurance[]>('/api/insurance').subscribe(allEntries => {
      this.allEntries = allEntries;
    });
  }

  ngOnInit(): void {
    this.fetchEntries();
  }
  setTileLayout(){
    this.isTile = true;
    this.isList = false;
    this.classLayout = "asCard g-padding";
    this.container = 'tileContainer';
  }
  setListLayout(){
    this.isTile = false;
    this.isList = true;
    this.classLayout = "asListElement g-padding"
    this.container = "listContainer"
  }

}
