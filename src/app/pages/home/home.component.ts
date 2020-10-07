import { Component, OnInit } from '@angular/core';
import { Benefits } from 'src/app/models/benefit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  benefits: Benefits[] = [
    {
      name: 'Flexibilidad Horaria',
      image: './assets/Ic_Hour.svg'
    },
    {
      name: 'Home Office',
      image: './assets/Ic_HomeOffice.svg'
    },
    {
      name: 'Capacitaciones y workshops',
      image: './assets/Ic_Workshops.svg'
    },
    {
      name: 'Snacks, frutas y bebidas gratis',
      image: './assets/Ic_DrinkSnacks.svg'
    },
    {
      name: 'Semana Remota',
      image: './assets/Ic_laptop.svg'
    },
    {
      name: 'Trabajar en ultimas tecnologias',
      image: './assets/Ic_brain.svg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goTwitter(): void {
    window.location.href = 'https://twitter.com/Wolox';
  }




}
