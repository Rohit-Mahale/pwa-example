import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userName : any = "";

  constructor(private localstorageService:LocalstorageService) { }

  ngOnInit() {
    this.userName = this.localstorageService.getItem('userName');
    console.log(this.userName);
  }

}
