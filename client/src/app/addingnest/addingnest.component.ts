import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nestnotice } from '../_models/nestnotice';
import { NestlistService } from '../_services/nestlist.service';

@Component({
  selector: 'app-addingnest',
  templateUrl: './addingnest.component.html',
  styleUrls: ['./addingnest.component.css']
})
export class AddingnestComponent implements OnInit {

  nestnotice: Nestnotice = new Nestnotice();
  addNestForm: FormGroup;
  constructor(private nestlistservice: NestlistService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.addNestForm = new FormGroup({
      routeName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      rockName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      regionName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      noticeDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    })
  }

  addnest() {
    this.nestnotice = this.addNestForm.value;
    this.nestlistservice.addNestNotice(this.nestnotice).subscribe(response => {
      this._snackBar.open('✔️ Zgłoszenie zostało dodane. Czeka na akceptację administratora.😃');
      this.addNestForm.reset();
    }, error => {
      console.log(error);
    });

  }

}
