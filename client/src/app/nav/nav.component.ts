import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.adminService.logout();
    this.router.navigateByUrl('/nestlist')
  }
}
