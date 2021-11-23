import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from '../_services/admin.service';
import { Routes, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AdminService, private _router: Router) { }
  canActivate(): Observable<boolean> {
    return this.accountService.currentAdmin$.pipe(
      map(admin => {
        if (admin) return true;
        {
          console.log('You shall not pass');
          this._router.navigateByUrl('/nestlist')
        }
      })
    );
  }

}
