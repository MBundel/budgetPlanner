import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

// nur für Backend
export class RestApiService {
  private readonly apiBaseUrl = '/api';

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/${endpoint}`);
  }

  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/${endpoint}`, data);
  }

  putData(id: number | undefined, endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/${endpoint}/${id}`, data).pipe(
      catchError((error) => {
        console.error('Error in putData:', error);
        return throwError(error);
      })
    );
  }

  deleteData(id: number | undefined, endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/${endpoint}/${id}`).pipe(
      catchError((error) => {
        console.error('Error in deleteData:', error);
        return throwError(error);
      })
    );
  }

  async formatDateAsync(date: Date, format: string): Promise<string> {
    return formatDate(date, format, 'en-US');
  }
}
