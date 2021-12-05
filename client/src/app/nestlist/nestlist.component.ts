import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nestnoticeid } from '../_models/nestnoticeid';
import { AdminService } from '../_services/admin.service';
import { NestlistService } from '../_services/nestlist.service';


@Component({
  selector: 'app-nestlist',
  templateUrl: './nestlist.component.html',
  styleUrls: ['./nestlist.component.css']
})
export class NestlistComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = ['routeName', 'rockName', 'regionName', 'noticeDescription', 'actions'];
  dataSource = new MatTableDataSource<Nestnoticeid>();



  constructor(public adminService: AdminService, private nestlistservice: NestlistService) { }

  ngOnInit() {
    this.nestlistservice.getNestNotices().subscribe(response => {
      this.dataSource = new MatTableDataSource<Nestnoticeid>(response);
      this.dataSource.sort = this.sort;
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