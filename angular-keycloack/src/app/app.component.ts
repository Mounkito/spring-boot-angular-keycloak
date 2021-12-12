import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-keycloack';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  userRoles: string[] = [];

  constructor(private readonly keycloak: KeycloakService) { }
  
  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.userRoles = this.keycloak.getUserRoles();
    }
  }

  isAdmin() : boolean{
    return this.userRoles.indexOf('admin') > -1;
  }
  
  isUser() : boolean{
    return this.userRoles.indexOf('user') > -1;
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout("http://localhost:4200");
  }
}
