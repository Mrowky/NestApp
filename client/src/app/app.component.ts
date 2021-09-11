import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  addingnestMode = false;


  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  addingnestToggle() {
    this.addingnestMode = !this.addingnestMode;
  }



}
