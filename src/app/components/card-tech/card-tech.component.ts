import { Component, Input, OnInit } from '@angular/core';
import { Tech } from '../../models/tech.model';

@Component({
  selector: 'app-card-tech',
  templateUrl: './card-tech.component.html',
  styleUrls: ['./card-tech.component.css']
})
export class CardTechComponent implements OnInit {

  @Input() tech: Tech;

  constructor() { }

  ngOnInit(): void {
  }

}
