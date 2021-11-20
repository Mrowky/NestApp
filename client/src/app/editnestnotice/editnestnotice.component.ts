import { Component, OnInit } from '@angular/core';
import { Nestnotice } from '../_models/nestnotice';
import { NestlistService } from '../_services/nestlist.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editnestnotice',
  templateUrl: './editnestnotice.component.html',
  styleUrls: ['./editnestnotice.component.css']
})
export class EditnestnoticeComponent implements OnInit {

  //nestnotice: any;
  nestnotice: Nestnotice;
  // nestnotice: Nestnotice = {
  //   routename: '',
  //   rockname: '',
  //   regionname: '',
  //   noticedescription: ''
  // };

  constructor(private nestlistservice: NestlistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.id = params[':id'];
    // });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getEditNestNotice(id)

    // tu trzeba żeby zamiast jedynki było id które kliknie

  }
  getEditNestNotice(id) {

    this.nestlistservice.getEditNestNotice(id).subscribe(response => {
      this.nestnotice = response;
      console.log(this.nestnotice);

    }), error => {
      console.log(error);
    };

  }

  cancel() {
    console.log('cancelled');
  }

}