import { Pipe, PipeTransform } from '@angular/core';
import {Entry} from "../budget-book/budgetBookInterfaces";


@Pipe({
  name: 'filterByDebit'
})
export class FilterByDebitPipe implements PipeTransform {
  transform(entries: Entry[], isDebit: boolean): Entry[] {
    return entries.filter(entry => entry.isDebit === isDebit);
  }
}
