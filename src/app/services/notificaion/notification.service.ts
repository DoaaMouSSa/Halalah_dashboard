import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private _http: HttpClient) {}

  getData() : Observable<any>{
    // Username and password for Basic Authentication
    const Username = '11195296';
    const Password = '60-dayfreetrial';

    // Encode the credentials using btoa
    const encodedCredentials = btoa(`${Username}:${Password}`);

    // Add the Authorization header and other headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
       'Authorization': `Basic ${encodedCredentials}`,
    });
  return  this._http.get<any>('/api/Notification/Get',{headers});
  }
  //create 
    //add
    postData(data: any): Observable<any> {
    const Username = '11195296';
    const Password = '60-dayfreetrial';
    const encodedCredentials = btoa(`${Username}:${Password}`);
    const headers = new HttpHeaders({
      'Accept': 'application/json',
       'Authorization': `Basic ${encodedCredentials}`,
    });
      return this._http.post<any>("/api/Notification/PushNotification", data,{headers});
    }

}

