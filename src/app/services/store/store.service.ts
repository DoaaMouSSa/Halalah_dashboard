import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _http: HttpClient) {}

  getData(pageNumber: number, pageSize: number) : Observable<any>{
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
    const body = {
      pageNumber: pageNumber,
      pageSize: pageSize,
      categoryId: 0, // Adjust this if needed
      filteredDiscount: false,
      filteredLatest: false
    };
    return this._http.post<any>(`api/Store/GetByPageNumber`, body, { headers });
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
      return this._http.post<any>(`api/Store/Add`, data,{headers});
    }
      //get by id
      GetById(id:string): Observable<any> {
        const Username = '11195296';
        const Password = '60-dayfreetrial';
        const encodedCredentials = btoa(`${Username}:${Password}`);
        const headers = new HttpHeaders({
          'Accept': 'application/json',
           'Authorization': `Basic ${encodedCredentials}`,
        });
        return this._http.get<any>(`api/Store/GetById?id=`+id,{headers});
      }
     //update
    updateData(id:string,data: any): Observable<any> {
      const Username = '11195296';
    const Password = '60-dayfreetrial';
    const encodedCredentials = btoa(`${Username}:${Password}`);
    const headers = new HttpHeaders({
      'Accept': 'application/json',
       'Authorization': `Basic ${encodedCredentials}`,
    });
  
      return this._http.put<any>(`api/Store/Update/`+id, data,{headers});
    }
  
     //delete
     deleteData(id: number): Observable<void> {
      const Username = '11195296';
      const Password = '60-dayfreetrial';
      const encodedCredentials = btoa(`${Username}:${Password}`);
      const headers = new HttpHeaders({
        'Accept': 'application/json',
         'Authorization': `Basic ${encodedCredentials}`,
      });
      return this._http.delete<void>(`api/Store/Delete?id=`+id,{headers});
    }
}
