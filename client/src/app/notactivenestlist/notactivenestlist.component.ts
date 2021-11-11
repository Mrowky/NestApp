import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NestlistService } from '../_services/nestlist.service';


@Component({
  selector: 'app-notactivenestlist',
  templateUrl: './notactivenestlist.component.html',
  styleUrls: ['./notactivenestlist.component.css']
})
export class NotActiveNestlistComponent implements OnInit {
  nestnotices: any;


  constructor(private nestlistservice: NestlistService) { }

  ngOnInit() {
    this.nestlistservice.getNotActiveNestNotices().subscribe(response => {
      this.nestnotices = response;

    }), error => {
      console.log(error);
    }
  }

  activatenestnotice(nestnoticeId) {
    this.nestlistservice.activateNestNotice(nestnoticeId).subscribe(),

      error => {
        console.log(error);
      }
  }


}
