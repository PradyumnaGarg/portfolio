import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  callApi(): Observable<any> {
   return this.http.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383', {

   })
  }
}
