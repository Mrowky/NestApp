import { Component, OnInit } from '@angular/core';
import { Nestnotice } from '../_models/nestnotice';
import { NestlistService } from '../_services/nestlist.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Nestnoticeid } from '../_models/nestnoticeid';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editnestnotice',
  templateUrl: './editnestnotice.component.html',
  styleUrls: ['./editnestnotice.component.css']
})
export class EditnestnoticeComponent implements OnInit {

  //nestnotice: any;
  nestnoticeid: Nestnoticeid;
  // nestnotice: Nestnotice = {
  //   routename: '',
  //   rockname: '',
  //   regionname: '',
  //   noticedescription: ''
  // };

  constructor(private nestlistservice: NestlistService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) { }

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
      this.nestnoticeid = response;
      console.log(this.nestnoticeid);

    }), error => {
      console.log(error);
    };

  }

  editNestNotice() {
    this.nestlistservice.editNestNotice(this.nestnoticeid).subscribe(() => {
      this._snackBar.open('✔️ Edytowano zgłoszenie');
      console.log(this.nestnoticeid);
    }), error => {
      console.log(error);
    };
  }

  cancel() {
    this.router.navigateByUrl('/nestlist')
    this.nestnoticeid = null;
  }

}