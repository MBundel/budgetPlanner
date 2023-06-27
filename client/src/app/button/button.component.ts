import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CalculateService} from "../calculate.service";
import {Entry} from "../budget-book/budgetBookInterfaces";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [CalculateService]
})
export class ButtonComponent implements OnInit {
  @Input() btnName: string = 'NoUse';
  @Input() id: number = 0;
  @Input() category: string = '';
  @Input() debit: boolean = false;
  @Input() entry?: Entry;


  private baseUrl = '/api/budgetbook';


  constructor(private http: HttpClient, private calcService: CalculateService) {

  }

  ngOnInit(): void {
  }

  // HANDLE CLICK BUTTON

  // -----  DELETE -----
  handleClick(entryId: number): void {
    if (this.btnName === 'delete') {
      if (entryId === 0) {
        this.loadData();
      } else {
        this.deleteEntry(entryId).subscribe(() => {
            this.loadData();
          },
          error => {
            console.log("error")
          });
      }

    }
    //  ----- SAVE -----

    if (this.btnName === 'save') {
      if (entryId === 0) {
        if (this.entry) {
          this.entry.category = this.category;
          this.entry.debit = this.debit;
          this.postEntry(this.entry).subscribe(() => {
              this.loadData();
            },

            error => {
              console.log("error");
            });
        }

      } else {
        this.putEntry(entryId, this.entry).subscribe(() => {
            this.loadData();
          },
          error => {
            console.log("error")
          });
      }
    }

    //  ----- CANCEL -----

    if (this.btnName === 'cancel') {
      this.loadData();
    }
  }


  //  POST DEL PUT

  postEntry(entry: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, entry);
  }

  deleteEntry(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  putEntry(id: number, updatedEntry: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, updatedEntry);
  }


  //  Other functions

  loadData(): void {
    // this.calcService.fetchEntries();
    window.location.reload();
  }
}
