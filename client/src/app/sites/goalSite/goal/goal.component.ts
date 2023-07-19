import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import {HighchartsChartModule} from 'highcharts-angular';
import {Entry} from "../goalInterfaces";
import {HttpClient} from "@angular/common/http";
import {CalculateService} from "../../../services/calculate.service";

More(Highcharts);

@Component({
  selector: 'app-goal',
  template: `
    <div #chartContainer style="width: 100%; height: 400px;"></div>
  `,
  styleUrls: ['./goal.component.scss'],
  imports: [HighchartsChartModule],
  standalone: true
})
export class GoalComponent implements OnInit {
  deadline = "2023-12-31T23:59:59Z";
  monthsUntilDeadline?: number;

  allEntries: Entry[] = []
  entry?: Entry;
  goalData: number[][] = [];
  budgetData: number[][] = [];
  foreignSum: number;

  @ViewChild('chartContainer', {static: true}) chartContainer?: ElementRef;


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  constructor(private http: HttpClient, private calcService: CalculateService) {
    this.foreignSum = calcService.sum;

  }


  fetchEntries(): void {
    this.http.get<Entry[]>('/api/goal').subscribe(allEntries => {
      this.allEntries = allEntries;
      this.calculateMonthsUntilDeadline()
      // console.log(this.allEntries)
    });
  }


  elevationData = this.goalData;


  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
          minWidth: 600,
        },
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      title: {
        text: 'GOAL PLANNER',
        align: 'center',
        style: {
          color: '#FFFFFF',
        },
      },
      accessibility: {
        description:
          'This line chart uses the Highcharts Annotations feature to place labels at various points of interest.',
        landmarkVerbosity: 'one',
      },
      lang: {
        accessibility: {
          screenReaderSection: {
            annotations: {
              descriptionNoPoints:
                '{annotationText}, at Month {annotation.options.point.x} Month, elevation {annotation.options.point.y} €.',
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      annotations: [
        {
          draggable: '',
          labelOptions: {
            backgroundColor: 'rgba(0 ,0,0,0.5)',
            verticalAlign: 'top',
            y: 15,
          },
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 12,
                y: 1500,
              },
              text: 'Fahrrad',
            },
          ],
        },
        {
          draggable: '',
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 13,
                y: 1526,
              },
              x: -30,
              text: 'Weltreise',
            },
          ],
        },
        {
          draggable: '',
          labelOptions: {
            shape: 'connector',
            align: 'right',
            crop: true,
            style: {
              fontSize: '0.8em',
              textOutline: '1px white',
            },
          },
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 1,
                y: 250,
              },
              text: 'Gehaltserhöhung',
            },
          ],
        },
      ],
      xAxis: {
        labels: {
          format: '{value} Monat',
        },
        minRange: 5,
        title: {
          text: 'Zeit',
        },
        accessibility: {
          rangeDescription: 'Range: heute bis zukunft',
        },
      },
      yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0,
        title: {
          text: null,
        },
        labels: {
          format: '{value} €',
        },
        accessibility: {
          description: 'Elevation',
          rangeDescription: 'Range: 0 bis max€',
        },
      },
      tooltip: {
        headerFormat: 'Time: {point.x:.1f} month<br>',
        pointFormat: '{point.y} €',
        shared: true,
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          type: 'area',
          data: this.elevationData,
          lineColor: 'green',
          color: 'blue',
          fillOpacity: 0.5,
          name: 'Elevation',
          marker: {
            enabled: false,
          },
          threshold: null,
        },
      ],
    };
    if (this.chartContainer) {
      Highcharts.chart(this.chartContainer.nativeElement, this.chartOptions);
    }
    this.fetchEntries();

  }

  calculateMonthsUntilDeadline() {
    const today = new Date();

    this.allEntries.forEach((entry: Entry) => {
      const deadlineDate = new Date(entry.deadLine);
      const diffInMonths = (deadlineDate.getFullYear() - today.getFullYear()) * 12 +
        (deadlineDate.getMonth() - today.getMonth());
      const monthsUntilDeadline = Math.abs(diffInMonths);
      const newDataPoint: number[] = [monthsUntilDeadline, entry.cost];
      this.goalData.push(newDataPoint);
    });

    let endOfGraph = Math.max(...this.goalData.map(row => row[0])) + 6;

    let totalSpending = 0;
    let monthlyAsset = 0;
    for (let i = 0; i <= endOfGraph; i++) {
      const newDataPoint: number[] = [i, monthlyAsset];

      monthlyAsset = i * this.foreignSum -totalSpending;

      for (let j = 0; j < this.goalData.length; j++) {
        if( this.goalData[j][0] === i ){
          monthlyAsset -= this.goalData[j][1];
          totalSpending += this.goalData[j][1];
        }
      }
      this.budgetData.push(newDataPoint)



    }


    // Update elevationData after populating goaldata
    this.elevationData = this.budgetData;

    // Update the chart
    (this.chartOptions.series![0] as Highcharts.SeriesAreaOptions).data = this.elevationData;
    Highcharts.chart(this.chartContainer!.nativeElement, this.chartOptions);
  }


}

