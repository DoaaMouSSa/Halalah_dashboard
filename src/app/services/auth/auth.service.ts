import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private apiUrlLogin=`${environment.apiUrl}/auth/login`;
  private isLocalStorage=typeof localStorage !=='undefined';

    constructor(private _http : HttpClient) {

      if(this.isLocalStorage)
      {
        const token = localStorage.getItem('token');
        if (token){
          this.tokenSubject.next(token);
        }
      }
    }
   
    private tokenSubject : BehaviorSubject<string | null> =  new BehaviorSubject< string | null>(null);
    login(userData: any): Observable<any>{
      const Username = '11195296';
      const Password = '60-dayfreetrial';
      const encodedCredentials = btoa(`${Username}:${Password}`);
      const headers = new HttpHeaders({
         'Accept': 'application/json',
         'Authorization': `Basic ${encodedCredentials}`,
      });
        return this._http.post<any>("/api/auth/login", userData,{headers}).pipe(tap(res =>{
        const token = res
        if(token){
          localStorage.setItem('token', token);
          this.tokenSubject.next(token);
          console.log('Decoded Token:', token);
        }
     }));

    }
  getToken():Observable<string|null>{
    return this.tokenSubject.asObservable();
  }

  isAuthenticated():boolean{
  return this.tokenSubject.value!==null;
  }

  logOut():void{
    localStorage.removeItem('token');
    this.tokenSubject.next(null)
  }
}