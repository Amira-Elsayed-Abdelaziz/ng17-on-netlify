import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateBusService {
  constructor(private http:HttpClient) { }
  getPrivateBusRequests(){
    return this.http.get("https://bushub.000webhostapp.com/api/private-bus-requests")
  }
  getPrivateBusRequestsFromUser(id:any){
    return this.http.get(`https://bushub.000webhostapp.com/api/private-bus-requests/${id}`)
  }
}
