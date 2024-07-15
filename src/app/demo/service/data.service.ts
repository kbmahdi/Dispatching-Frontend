import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private apiUrl = 'http://localhost:8000/api/read-csv';
    constructor(private http: HttpClient) {}

    async getCSVData(): Promise<any> {
        const url = 'http://localhost:8000/api/read-csv'; // Adjust URL to match your FastAPI server address
        const response = await this.http.get(url).toPromise();
        return response;
    }

    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    async getCombobox(): Promise<any> {
        const url = 'http://localhost:8000/api/read-combobox'; // Adjust URL to match your FastAPI server address
        const response = await this.http.get(url).toPromise();
        return response;
    }

  sendSelectedFilters(selectedValues: any): Promise<any> {
    const url = 'http://localhost:8000/api/send-selected-filters'; // Adjust URL to match your Python server endpoint
    //const jsonString = JSON.stringify(selectedValues);
    return this.http.post<any>(url, selectedValues).toPromise();
  }

    getTotal(data : any): Observable<any> {
        const url = 'http://localhost:8000/api/somme';
        return this.http.post<any>(url,data);
    }

  sendDesiredStockCoverage(desiredStockCoverage: number | null): Observable<any> {
    const url = 'http://localhost:8000/api/stock-coverage'; // Adjust the URL to match your FastAPI endpoint
    const body = { desiredStockCoverage };
    return this.http.post<any>(url, body);
  }

  sendCombinedRequest(storeName: string[], desiredStockCoverage: number | null, dateRangeStr: string): Observable<any> {
    const url = 'http://localhost:8000/api/selected-canal-table'; // Adjust the URL to match your FastAPI endpoint
    const body = { store_names: storeName, desired_stock_coverage: desiredStockCoverage, date_range_str: dateRangeStr };
    return this.http.post<any>(url, body);
  }

  sendTableData(data: any[]): Observable<any> {
    const url = 'http://localhost:8000/api/dispatching-table-data'; // Adjust the URL to match your Python server endpoint
    return this.http.post<any>(url, data);
  }




}

