import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

      constructor(private api:ApiServiceService,
        private router:Router ){}

      hide = true;
      username!: string;
      password!: string;
      

      login(){
        console.log("run");
        this.api.checkValidationCredentials(this.username, this.password).subscribe((res:boolean)=>{
          if(res === true ){
            this.router.navigate(["/home"]);
          }
        });
      }
    



}
