import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {TwelveDataApiService} from "../../services/thirdParties/twelve-data-api.service";



export  interface TimeSeries {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit{
  keysOfTimeSeries =  [ 'datetime', ' open', 'high' , 'low', 'close', 'volume'];
  displayedColumns: string[] = [];
  stockData: any
  dataSource = new MatTableDataSource<TimeSeries>()
  constructor(private twelveDataService : TwelveDataApiService) {
    this.stockData = [];
  }

  myThing = "close"
  changeData = () =>{
    this.myThing = "datetime"
  }
  private sortValuesByDate(ascending: boolean) {
    this.stockData.values.sort((a: { datetime: string; [key: string]: any; }, b: { datetime: string; [key: string]: any; }) => {
      return ascending
        ? new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
        : new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
    });
  }

  sortByDateAB = () => {
    this.sortValuesByDate(true);
  }

  sortByDateBA = () => {
    this.sortValuesByDate(false);
  }
  sortByDate = (ascending = true) => {

    this.sortValuesByDate(ascending);
  }




  ngOnInit(): void {
    this.twelveDataService.getStockData().subscribe((data) =>{
      this.stockData = data;
      console.log(data)
      console.log(this.keysOfTimeSeries)
      this.dataSource = this.stockData;
    })

  }



}
