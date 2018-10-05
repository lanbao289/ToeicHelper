import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.isTokenExpired();
  }

  logoutClicked(): void {
    this.authenticationService.logout();
  }
}
