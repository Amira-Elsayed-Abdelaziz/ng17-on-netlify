import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TripsshowService {

  url:string ="https://bushub.000webhostapp.com"
  constructor(private http: HttpClient) { }
  listtrips(){
    return this.http.get<any>(this.url+`/api/tripsjoin`)
  }
}
