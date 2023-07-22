import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from './InsuranceInterface';
import { layoutButton } from '../../component/button/compButton-interfaces';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurance.component.html',
  styleUrls: ['../../styles/cardTemplate.scss', '../../styles/general.scss']
})
export class InsuranceComponent implements OnInit {
  allEntries: Insurance[] = [];
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

  onNewInsurance() {
    console.log("i was klicked")
    const newInsurance: Insurance = {
      id: 1,
      insuranceName: 'Neue Versicherung',
      companyName: 'Versicherungsgesellschaft',
      amount: 100,
      payPeriodPerYear: 12,
      endOfContract: new Date('2023-12-31'),
      payDay: new Date('2023-07-31'),
      isActive: true,
      isNecessary: true,
      percentageCover: 80,
      createdAt: new Date()
    };

    this.httpClient.post('/api/insurance', newInsurance).subscribe(
      (response) => {
        console.log('Neue Versicherung erfolgreich erstellt:', response);

      },
      (error) => {
        console.error('Fehler beim Erstellen der neuen Versicherung:', error);
      }
    );
  }


}
