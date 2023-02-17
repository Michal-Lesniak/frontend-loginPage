import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {

  userForm: FormGroup;
  hide_password_flag:boolean = true;
  hide_repeat_password_flag:boolean = true;

  constructor(private fb:FormBuilder, private api:ApiServiceService, private router:Router){
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      username: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(data:any){
    this.api.registerUsers(data.firstName, data.lastName, data.username, data.password, data.email).subscribe(res => console.log(res));
    this.userForm.reset();
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)?.clearValidators();
      this.userForm.get(key)?.updateValueAndValidity();
    })
    this.router.navigate(['/home']);
  }

}
