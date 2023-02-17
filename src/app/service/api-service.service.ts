import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient ){}

  checkValidationCredentials(username:string, password:string ){
    const UserModel = {
      username: username,
      password: password
    }

    return this.http.post<boolean>("http://localhost:8080/login", JSON.stringify(UserModel), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  getLoginUserData(){
    return this.http.get<User>("http://localhost:8080/home");
  }

  registerUsers(firstName: string, lastName:string, username:string, password:string, email:string){
    const userBody = {
        username: username,
        firstName: firstName,
        lastName: lastName, 
        password: password,
        email:email
    }

    return this.http.post<boolean>("http://localhost:8080/sign-up",JSON.stringify(userBody),{
      headers: {
        'Content-type':'application/json',
      }
    })
  }
}
