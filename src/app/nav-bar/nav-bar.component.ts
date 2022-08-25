import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  homeUrl: string = environment.pkmListUrl;
  loginUrl: string = environment.loginUrl;
  auth: AuthService;

  constructor(private authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit(): void {

  }

}
