import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName : any = "";


  constructor(private localstorageService:LocalstorageService,private router:Router) { }

  ngOnInit() {
    this.userName = this.localstorageService.getItem('userName');
    console.log(this.userName);
  }

  logOut(){
    this.localstorageService.removeAll();
    this.router.navigateByUrl('home');

    setTimeout(() => window.location.reload(), 500);
  }

}