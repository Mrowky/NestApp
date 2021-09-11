import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestlist',
  templateUrl: './nestlist.component.html',
  styleUrls: ['./nestlist.component.css']
})
export class NestlistComponent implements OnInit {
  nestnotices: any;

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNestNotices();
  }
  getNestNotices() {
    this.http.get('https://localhost:5001/api/nestnotices').subscribe(response => {
      this.nestnotices = response;
    }, error => {
      console.log(error);
    })
  }

}
