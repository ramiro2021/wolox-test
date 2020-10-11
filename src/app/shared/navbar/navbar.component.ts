import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LanguajeService } from '../../services/languaje.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private languajeService: LanguajeService) { }

  ngOnInit(): void {
    localStorage.removeItem('temporalSession');
  }

  switchLanguage(languaje: string): void {
    this.languajeService.switchLanguage(languaje);
  }

  logout(): void {
    this.authService.logout();
  }

}
