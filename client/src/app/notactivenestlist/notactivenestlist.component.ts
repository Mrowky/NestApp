import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nestnoticeid } from '../_models/nestnoticeid';
import { NestlistService } from '../_services/nestlist.service';


@Component({
  selector: 'app-notactivenestlist',
  templateUrl: './notactivenestlist.component.html',
  styleUrls: ['./notactivenestlist.component.css']
})
export class NotActiveNestlistComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = ['routeName', 'rockName', 'regionName', 'noticeDescription', 'actions'];
  dataSource = new MatTableDataSource<Nestnoticeid>();


  constructor(private nestlistservice: NestlistService) { }

  ngOnInit() {
    this.nestlistservice.getNotActiveNestNotices().subscribe(response => {
      this.dataSource = new MatTableDataSource<Nestnoticeid>(response);
      this.dataSource.sort = this.sort;
    }), error => {
      console.log(error);
    }
  }

  activatenestnotice(nestnoticeId) {
    this.nestlistservice.activateNestNotice(nestnoticeId).subscribe(),

      error => {
        console.log(error);
      }
    window.location.reload();
  }

}
