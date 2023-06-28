import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import { HighchartsChartModule } from 'highcharts-angular';
More(Highcharts);

@Component({
  selector: 'app-goal',
  template: `
    <div #chartContainer style="width: 100%; height: 400px;"></div>
  `,
  styleUrls: ['./goal.component.css'],
  imports: [HighchartsChartModule],
  standalone: true
})
export class GoalComponent implements OnInit {
  @ViewChild('chartContainer', { static: true }) chartContainer?: ElementRef;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  elevationData = [
    [0, 0],
    [5, 300],
    [12, 1500],
    [12, 1000],
    [24, 1500],
  ];

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
        maxPadding: 0        ,
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

    // Erstelle das Chart, wenn das chartContainer-Element vorhanden ist
    if (this.chartContainer) {
      Highcharts.chart(this.chartContainer.nativeElement, this.chartOptions);
    }
  }
}

