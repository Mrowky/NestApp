import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
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
  //pobieranie listy zgłoszęń gniazd dla admina
  getNotActiveNestNotices() {
    return this.http.get(this.baseUrl + 'nestnotices/notactive')
  }

  getEditNestNotice(id: number):Observable<Nestnotice> {
    return this.http.get<Nestnotice>(this.baseUrl + 'nestnotices/' + id)
  }

  activateNestNotice(nestnoticeId: number) {
    return this.http.post(this.baseUrl + 'nestnotices/confirmnotice?nestnoticeId=' + nestnoticeId, null)
  }

  //dodawanie zgłoszenia o gnieździe
  addNestNotice(nestnotice: Nestnotice) {
    return this.http.post(this.baseUrl + 'nestnotices/addnotice', nestnotice)

  }

}



