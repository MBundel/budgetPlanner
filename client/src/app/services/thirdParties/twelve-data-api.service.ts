import { Injectable } from '@angular/core';
import {twelveDataA} from "../../../enviroments/enviroments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TwelveDataApiService {
  constructor(private http: HttpClient) { }


  typeOfInformation = 'time_series' ;
  symbol = 'AAPL'; // frima, hier apple
  interval = '1day'


  getStockData(){



    const url = `https://api.twelvedata.com/${this.typeOfInformation}?symbol=${this.symbol}&interval=${this.interval}&format=JSON&apikey=${twelveDataA.apiKey}` ;

    console.log(url)
    return this.http.get(url);

  }
}
