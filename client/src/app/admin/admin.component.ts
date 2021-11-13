import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    model: any = {}
    constructor(public adminService: AdminService, private router: Router) { }

    ngOnInit(): void {
    }

    login() {
        this.adminService.login(this.model).subscribe(response => {
          this.router.navigateByUrl('/notactivenestlist');
        })
      }
    
      logout() {
        this.adminService.logout();
        this.router.navigateByUrl('/')
      }

}
