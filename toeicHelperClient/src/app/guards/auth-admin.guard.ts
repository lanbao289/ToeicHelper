import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem('currentUser') != null) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role !== 'ROLE_ADMIN') {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
    }
  }
}
