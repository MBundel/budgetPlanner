import { Component, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from './InsuranceInterface';
import { layoutButton } from '../../component/button/compButton-interfaces';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurance.component.html',
  styleUrls: ['../../styles/cardTemplate.scss', '../../styles/general.scss', './insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  allEntries: Insurance[] = [];
  // isDetail = false;
  layoutData = layoutButton.tile;

  constructor(private httpClient: HttpClient) { }

  fetchEntries() {
    this.httpClient.get<Insurance[]>('/api/insurance').subscribe(allEntries => {
      this.allEntries = allEntries;
    });
  }

  ngOnInit(): void {
    this.fetchEntries();
  }


  // Receive the emitted layout data from the child component
  onLayoutChanged(layoutData: any) {
    this.layoutData = layoutData;
  }
}
