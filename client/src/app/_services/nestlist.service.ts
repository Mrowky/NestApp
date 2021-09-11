import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NestlistService {
baseUrl = 'https://localhost:5001/api';
nestnotices: BehaviorSubject<any>;

  constructor(private http: HttpClient) { }

  //pobieranie listy zgłoszeń gniazd
  getNestNotices() {
    this.http.get('https://localhost:5001/api/nestnotices').subscribe(response => {
      this.nestnotices = new BehaviorSubject(this.nestnotices);
    }, error => {
      console.log(error);
    })
  }

  //logowanie dla administratora
  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
