import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

}
