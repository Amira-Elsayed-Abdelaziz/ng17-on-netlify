import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  constructor(private http:HttpClient) { }
  getBusTypes(){
    return this.http.get("https://bushub.000webhostapp.com/api/bus-types");
  }
}
