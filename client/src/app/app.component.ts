import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Zgłoszenia gniazd na drogach wspinaczkowych';
  nestnotices: any;

  constructor(private http: HttpClient) { }
  ngOnInit() {
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
