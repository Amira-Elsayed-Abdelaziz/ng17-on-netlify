import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BusService {
  url: string = 'https://bushub.000webhostapp.com';
  constructor(private http: HttpClient) {}
  listBuses() {
    return this.http.get(this.url + '/api/admin/buses');
  }
  
  listBusesForTrips() {
    return this.http.get(this.url + '/api/admin/buses-trips');
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':'application/json'
    }),
  };
  addBus(bus: any) {
    return this.http.post(
      this.url + '/api/admin/buses',
      bus,
      this.httpOptions
    );
  }
}
