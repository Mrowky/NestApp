import { Component, OnInit } from '@angular/core';
import { Nestnotice } from '../_models/nestnotice';
import { Nestnoticeid } from '../_models/nestnoticeid';
import { NestlistService } from '../_services/nestlist.service';

@Component({
  selector: 'app-addingnest',
  templateUrl: './addingnest.component.html',
  styleUrls: ['./addingnest.component.css']
})
export class AddingnestComponent implements OnInit {

  //nestnotice: any = {};
  nestnotice: Nestnotice = new Nestnotice ();
  

  // nestnotice: Nestnotice = {
  //   routeName: '',
  //   rockName: '',
  //   regionName: '',
  //   noticeDescription: ''
  // };

  constructor(private nestlistservice: NestlistService) { }

  ngOnInit(): void {

  }

  addnest() {
    console.log(this.nestnotice);
    this.nestlistservice.addNestNotice(this.nestnotice).subscribe(response => {
      //this.nestnotice[] = response;

      console.log(response);
      console.log(this.nestnotice);
    }, error => {
      console.log(error);
    });

  }
  cancel() {
    console.log('cancelled');
  }

}
