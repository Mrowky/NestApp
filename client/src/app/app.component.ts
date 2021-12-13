import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Admin } from './_models/admin';
import { NestlistService } from './_services/nestlist.service';
import { AdminService } from './_services/admin.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'System dodawania zgłoszeń o ptasich gniazdach na drogach wspinaczkowych.';
  @ViewChild('sidenav') sidenav: MatSidenav;
  isOpened = false;



  constructor(private http: HttpClient, public adminService: AdminService, private router: Router) { }
  ngOnInit() {
    this.setCurrentAdmin();
  }

  setCurrentAdmin() {
    const admin: Admin = JSON.parse(localStorage.getItem('admin'));
    this.adminService.setCurrentAdmin(admin);
  }
  logout() {
    this.adminService.logout();
    this.router.navigateByUrl('/nestlist')
  }
}
