import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivate() {

    const isLoggedIn = this.authService.isLoggedIn;

    if (!isLoggedIn) {
      this.router.navigate([environment.loginUrl]);
    }

    return isLoggedIn;

  }

}
