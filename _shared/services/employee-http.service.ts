import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Response } from '../models/response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  getEmployees(): Observable<Response<Employee[]>>{
    return this.http.get<Response<Employee[]>>(`${environment.apiUrl}/tutorial`);
  }

}
