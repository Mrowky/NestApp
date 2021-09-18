import { Component, OnInit } from '@angular/core';
import { Nestnotice } from '../_models/nestnotice';
import { NestlistService } from '../_services/nestlist.service';

@Component({
  selector: 'app-addingnest',
  templateUrl: './addingnest.component.html',
  styleUrls: ['./addingnest.component.css']
})
export class AddingnestComponent implements OnInit {

  nestnotice: Nestnotice = {
    routename: '',
    rockname: '',
    regionname: '',
    noticedescription: ''
  };

  constructor(private nestlistservice: NestlistService) { }

  ngOnInit(): void {
    
  }

  addnest() {
    this.nestlistservice.addNestNotice(this.nestnotice).subscribe(response => {
     // this.nestnotice[] = response;
      
      console.log(response);
    });

  }
  cancel() {
    console.log('cancelled');
  }

}
