import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addingnest',
  templateUrl: './addingnest.component.html',
  styleUrls: ['./addingnest.component.css']
})
export class AddingnestComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  addnest(){
    console.log(this.model);
  }
  cancel(){
    console.log('cancelled');
  }

}
