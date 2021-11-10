import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Nestnotice } from '../_models/nestnotice';

@Injectable({
  providedIn: 'root'
})
export class NestlistService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  //pobieranie listy zgłoszeń gniazd
  getNestNotices() {
    return this.http.get(this.baseUrl + 'nestnotices')

  }
  //dodawanie zgłoszenia o gnieździe
  addNestNotice(nestnotice: Nestnotice) {
    return this.http.post(this.baseUrl + 'nestnotices/addnotice', nestnotice).pipe(
      map(nestnotice => JSON.stringify(nestnotice))
      )
      
  }
  
  //logowanie dla administratora
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}



