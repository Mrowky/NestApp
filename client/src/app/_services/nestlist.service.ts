import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Admin } from '../_models/admin';
import { Nestnotice } from '../_models/nestnotice';

@Injectable({
  providedIn: 'root'
})
export class NestlistService {
  baseUrl = 'https://localhost:5001/api/';
  private currentAdminSource = new ReplaySubject<Admin>(1);
  currentAdmin$ = this.currentAdminSource.asObservable();

  constructor(private http: HttpClient) { }

  //pobieranie listy zgłoszeń gniazd
  getNestNotices() {
    return this.http.get(this.baseUrl + 'nestnotices')

  }
  getNotActiveNestNotices() {
    return this.http.get(this.baseUrl + 'nestnotices/notactive')
  }

  activateNestNotice(nestnoticeId: number) {
    return this.http.post(this.baseUrl + 'nestnotices/confirmnotice?nestnoticeId=' + nestnoticeId, null)
  }

  //dodawanie zgłoszenia o gnieździe
  addNestNotice(nestnotice: Nestnotice) {
    return this.http.post(this.baseUrl + 'nestnotices/addnotice', nestnotice).pipe(
      map(nestnotice => JSON.stringify(nestnotice))
    )

  }

  //logowanie dla administratora
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: Admin) => {
        const admin = response;
        if (admin) {
          localStorage.setItem('admin', JSON.stringify(admin));
          this.currentAdminSource.next(admin);
        }
      })
    )
  }
  setCurrentAdmin(admin: Admin) {
    this.currentAdminSource.next(admin);
  }
  logout() {
    localStorage.removeItem('admin');
    this.currentAdminSource.next(null);
  }
}



