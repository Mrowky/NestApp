import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Nestnotice } from '../_models/nestnotice';
import { Nestnoticeid } from '../_models/nestnoticeid';

@Injectable({
  providedIn: 'root'
})
export class NestlistService {
  baseUrl = 'https://localhost:5001/api/';
  nestnotices: Nestnotice[] = [];

  constructor(private http: HttpClient) { }

  //pobieranie listy zgłoszeń gniazd
  getNestNotices() {
    return this.http.get(this.baseUrl + 'nestnotices')

  }
  //pobieranie listy zgłoszęń gniazd dla admina
  getNotActiveNestNotices() {
    return this.http.get(this.baseUrl + 'nestnotices/notactive')
  }

  getEditNestNotice(id: number): Observable<Nestnoticeid> {
    return this.http.get<Nestnoticeid>(this.baseUrl + 'nestnotices/' + id)
  }

  activateNestNotice(nestnoticeId: number) {
    return this.http.post(this.baseUrl + 'nestnotices/confirmnotice?nestnoticeId=' + nestnoticeId, null)
  }

  //dodawanie zgłoszenia o gnieździe
  addNestNotice(nestnotice: Nestnotice) {
    return this.http.post(this.baseUrl + 'nestnotices/addnotice', nestnotice)

  }
  editNestNotice(nestnoticeid: Nestnoticeid) {
    return this.http.put(this.baseUrl + 'nestnotices/' + nestnoticeid.id, nestnoticeid)
    // .pipe(
    //   map(()=>{
    //     const index = this.nestnotices.indexOf(nestnotice);
    //     this.nestnotices[index] = nestnotice;
    //   })
    // )
  }

  deleteNestNotice(nestnoticeId: number) {
    return this.http.delete(this.baseUrl + 'nestnotices/' + nestnoticeId)
    // .pipe(
    //   map(()=>{
    //     const index = this.nestnotices.indexOf(nestnotice);
    //     this.nestnotices[index] = nestnotice;
    //   })
    // )
  }



}



