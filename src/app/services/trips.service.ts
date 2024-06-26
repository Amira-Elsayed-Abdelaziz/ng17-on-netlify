import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  userPreviousTrips(token:any) {
    // console.log(token);
  let  httpOptions =new HttpHeaders().set("Authorization","Bearer "+token);

    return this.http.get('https://bushub.000webhostapp.com/api/trip', {headers: httpOptions });
  }
  userNextTrips(token:any) {
    // console.log(token);
  let  httpOptions =new HttpHeaders().set("Authorization","Bearer "+token);

    return this.http.get('https://bushub.000webhostapp.com/api/nexttrips', {headers: httpOptions });
  }

}
