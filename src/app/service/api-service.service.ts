import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient ){}
  username?: string; 

  checkValidationCredentials(username:string, password:string ){
    const UserModel = {
      username: username,
      password: password
    }
    this.username=username;
    return this.http.post<boolean>("http://localhost:8080/api/users/verify", JSON.stringify(UserModel), {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  getLoginUserData(){
    return this.http.get<User>(`http://localhost:8080/api/users/${this.username}`);
  }

  registerUsers(firstName: string, lastName:string, username:string, password:string, email:string){
    const userBody = {
        username: username,
        firstName: firstName,
        lastName: lastName, 
        password: password,
        email:email
    }

    this.username=username;
    return this.http.post<boolean>("http://localhost:8080/api/users",JSON.stringify(userBody),{
      headers: {
        'Content-type':'application/json',
      }
    })
  }
}
