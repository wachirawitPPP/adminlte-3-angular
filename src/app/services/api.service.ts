import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // apiBaseUrl: string = 'https://jsonplaceholder.typicode.com/todos/'
    apiBaseUrl: string = 'http://localhost:3000/books'
    constructor(private http: HttpClient) {}

    getAllData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiBaseUrl);

    }
    getDataById(id:number): Observable<any[]>{
        return this.http.get<any[]>(`${this.apiBaseUrl}/${id}`);
    }

    updateDataById(id:number, data:any): Observable<any>{
        return this.http.put<any>(`${this.apiBaseUrl}/${id}`, data);
    }
    deleteDatabyId(id:number): Observable<any>{
        return this.http.delete<any>(`${this.apiBaseUrl}/${id}`);
    }
    addData(data:any): Observable<any[]>{return this.http.post<any[]>(this.apiBaseUrl,data)};
}
