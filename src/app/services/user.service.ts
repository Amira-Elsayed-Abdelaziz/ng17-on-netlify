import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://bushub.000webhostapp.com';
  // private dataSubject = new BehaviorSubject<object>({});
  // private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>("data");
  // public data$: Observable<any> = this.dataSubject.asObservable();
  private isFirstDataSent = false;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'

    })
  };


  sendData(formDataJson: any) {
    // console.log(formDataJson);
    // Replace 'http://your-api-url' with your actual API URL
    return this.http.post('https://bushub.000webhostapp.com/api/register', formDataJson);
  }

  login(formDataJson: any) {
    // console.log(formDataJson);
    // Replace 'http://your-api-url' with your actual API URL
    return this.http.post('https://bushub.000webhostapp.com/api/login', formDataJson, this.httpOptions);
  }

  private dataSubject = new BehaviorSubject<object>({});

  // sendUserData(data: {}): void {

  //     this.dataSubject.next(data); // Emit the data if it's the first time

  // }
  // getData() {
  //   return this.dataSubject.asObservable();
  // }

  userProfile(token: any) {
    let httpOptions = new HttpHeaders().set("Authorization", "Bearer " + token);

    return this.http.get('https://bushub.000webhostapp.com/api/profile', { headers: httpOptions });

  }

  editUserDetails(userData: any, token: any) {

    // let  httpOptions =new HttpHeaders().set("Authorization","Bearer "+token);


    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        "Authorization": "Bearer " + token
      })
    };
    // let  httpOptions =new HttpHeaders().set("Authorization","Bearer "+token);


    return this.http.post("https://bushub.000webhostapp.com/api/edit", userData, httpOptions);
  }

  forgetPassword(emailToResetPass: any) {

    return this.http.post("https://bushub.000webhostapp.com/api/forgot-password", emailToResetPass);
  }


  private email = new BehaviorSubject<any>("")
  private otp = new BehaviorSubject<any>("")


  getEmail() {
    return this.email.asObservable();
  }

  setEmail(newValue: string) {
    this.email.next(newValue);
  }
  getOtp() {
    return this.otp.asObservable();
  }

  setOtp(newValue: string) {
    this.otp.next(newValue);
  }



  verifycode(emailToResetPass: any) {

    return this.http.post("https://bushub.000webhostapp.com/api/verify-reset-code", emailToResetPass);
  }


  resetPassword(dataToResetPass: any) {

    return this.http.post("https://bushub.000webhostapp.com/api/reset-password", dataToResetPass);
  }



  signByGoogle(userData: any) {

    // return this.http.post("https://bushub.000webhostapp.com/api/auth-google", userData);

    return this.http.post("https://bushub.000webhostapp.com/api/sign-google", userData);


  }

  contactus(details: any, token: any) {

    let httpOptions = new HttpHeaders().set("Authorization", "Bearer " + token);

    return this.http.post("https://bushub.000webhostapp.com/api/contactus", details, { headers: httpOptions });


  }



  logout(token: any) {

    let httpOptions = new HttpHeaders().set("Authorization", "Bearer " + token);

    return this.http.get("https://bushub.000webhostapp.com/api/logout", { headers: httpOptions });


  }


  changeProfilePhoto(formData: any, token: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        "Authorization": "Bearer " + token
      })
    };

    return this.http.post("https://bushub.000webhostapp.com/api/uploadimage", formData, httpOptions);

  }

  showTicket(trip_id: any, token: any) {

    let httpOptions = new HttpHeaders().set("Authorization", "Bearer " + token);

    return this.http.get(`https://bushub.000webhostapp.com/api/userticket/${trip_id}`, { headers: httpOptions });

  }



}
