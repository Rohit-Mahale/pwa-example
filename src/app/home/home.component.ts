import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from "@angular/router";

// import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private localstorageService:LocalstorageService,private router:Router) { }
  email:any ='';
  password:any ='';
  
  ngOnInit() {
  }

  login(email,password){
    this.localstorageService.setItem('userName',email);
    this.router.navigateByUrl('dashboard');
    setTimeout(() => window.location.reload(), 500);
    // window.location.reload();

  }

}
