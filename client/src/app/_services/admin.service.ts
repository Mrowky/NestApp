import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Admin } from '../_models/admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    baseUrl = 'https://localhost:5001/api/';
    private currentAdminSource = new ReplaySubject<Admin>(1);
    currentAdmin$ = this.currentAdminSource.asObservable();

    constructor(private http: HttpClient) { }
    //logowanie dla administratora
    login(model: any) {
        return this.http.post(this.baseUrl + 'admin/login', model).pipe(
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
