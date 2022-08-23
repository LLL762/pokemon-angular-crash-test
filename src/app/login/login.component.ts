import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = 'Vous etes déconnecté';
  username: string = '';
  password: string = '';
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(): void {

    this.message = this.authService.isLoggedIn ? 'Vous etes connecté' : 'Identifiant ou mot de passe incorrect'

  }

  login(): void {

    this.message = 'Tentative de connexion en cours';
    this.authService.login(this.username, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage(); if (isLoggedIn) { this.authSucceed() } else { this.authFailed() }
      })

  }

  logout(): void {
    this.authService.logout();
    this.message = 'Vous ete déconnecté';


  }



  authSucceed(): void {

    this.router.navigate([environment.pkmListUrl]);

  }

  authFailed(): void {

    this.password = '';
    this.router.navigate([environment.loginUrl]);

  }

}


