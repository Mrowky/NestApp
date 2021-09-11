import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NestlistService } from '../_services/nestlist.service';


@Component({
  selector: 'app-nestlist',
  templateUrl: './nestlist.component.html',
  styleUrls: ['./nestlist.component.css']
})
export class NestlistComponent implements OnInit {
  nestnotices: any;


  constructor(private appservice: NestlistService) { }

  ngOnInit() {

    this.appservice.getNestNotices();
    console.log(this.nestnotices);
  }


}
