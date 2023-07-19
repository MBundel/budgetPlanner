import {Injectable} from "@angular/core";
import {Entry} from "../sites/bugetbook/budgetBookInterfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  entriesByCategory: Map<string, Entry[]> = new Map<string, Entry[]>();
  entry?: Entry;
  isDebitMap: Map<string, Entry[]> = new Map<string, Entry[]>();
  notDebitMap: Map<string, Entry[]> = new Map<string, Entry[]>();
  allEntries: Entry[] = [];
  sum: number = 0;

  constructor(private http: HttpClient) {
    this.fetchEntries();

  }

  fetchEntries(): void {
    // console.log("api/budgetbook called");
    this.http.get<Entry[]>('/api/budgetbook').subscribe(allEntries => {
      this.allEntries = allEntries;
      // console.log("notDebitmap: " + this.notDebitMap)
      this.sortingByCategory();

    });
  }

  sortingByCategory(): void {
    this.entriesByCategory = new Map<string, Entry[]>();


    this.allEntries.forEach(entry => {
      const category = entry.category;


      if (this.entriesByCategory.has(category)) {
        const entries = this.entriesByCategory.get(category);
        if (entries) {
          entries.push(entry);
        }
      } else {
        this.entriesByCategory.set(category, [entry]);
      }
    });
    this.splittingByIsDebit();
  }

  splittingByIsDebit(): void {


    this.entriesByCategory.forEach((entries: Entry[], category: string) => {
      const isDebitEntries: Entry[] = [];
      const notDebitEntries: Entry[] = [];

      entries.forEach(entry => {
        if (entry.debit) {
          isDebitEntries.push(entry);
          this.sum += entry.amount;
        } else {
          notDebitEntries.push(entry);
          this.sum -= entry.amount;
        }
        // console.log(this.sum + " " + entry.name)
      });

      if (isDebitEntries.length > 0) {
        this.isDebitMap.set(category, isDebitEntries);
      }

      if (notDebitEntries.length > 0) {
        this.notDebitMap.set(category, notDebitEntries);
      }
    });
    // console.log("notDebitmap: " + this.notDebitMap)

  }





}
