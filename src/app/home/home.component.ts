import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private api:ApiServiceService){}

  userData: User | null = null;

  ngOnInit(): void {
    this.api.getLoginUserData().subscribe(res => console.log(res))
  }

}
