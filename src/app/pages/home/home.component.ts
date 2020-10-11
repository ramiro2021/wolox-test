import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguajeService } from '../../services/languaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }

  goTwitter(): void {
    window.location.href = 'https://twitter.com/Wolox';
  }




}
