import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { NestlistService } from '../_services/nestlist.service';


@Component({
  selector: 'app-nestlist',
  templateUrl: './nestlist.component.html',
  styleUrls: ['./nestlist.component.css']
})
export class NestlistComponent implements OnInit {
  nestnotices: any;


  constructor(public adminService: AdminService, private nestlistservice: NestlistService) { }

  ngOnInit() {
    this.nestlistservice.getNestNotices().subscribe(response => {
      this.nestnotices = response;

    }), error => {
      console.log(error);
    }
  }
  deleteNestNotice(nestnoticeId) {
    this.nestlistservice.deleteNestNotice(nestnoticeId).subscribe(),
    error => {
      console.log(error);
    }
    window.location.reload();

  }


}