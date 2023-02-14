import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient ){}

  checkValidationCredentials(username:string, password:string ){
    return this.http.get<any>("http://localhost:8080/user/"+username+"/"+password);
  }
}
