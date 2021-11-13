import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from './_models/admin';
import { NestlistService } from './_services/nestlist.service';
import { AdminService } from './_services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title ='NestApp';

  //addingnestMode = false;


  constructor(private http: HttpClient, private adminService: AdminService) { }
  ngOnInit() {
    this.setCurrentAdmin();
  }

  setCurrentAdmin() {
    const admin: Admin = JSON.parse(localStorage.getItem('admin'));
    this.adminService.setCurrentAdmin(admin);
  }

  //addingnestToggle() {
   // this.addingnestMode = !this.addingnestMode;
 // }


}
