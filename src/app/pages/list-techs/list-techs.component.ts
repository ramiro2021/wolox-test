import { Component, OnInit } from '@angular/core';
import { TechsService } from '../../services/techs.service';
import { Tech } from '../../models/tech.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-techs',
  templateUrl: './list-techs.component.html',
  styleUrls: ['./list-techs.component.css']
})
export class ListTechsComponent implements OnInit {
  filterParam = '';
  orderParam = '';
  techs: Tech[] = [];
  count: number;

  constructor(private techService: TechsService) { }

  ngOnInit(): void {
    this.getTechs();


    this.techService.totalCount.subscribe(
      data => {
        this.count = data;
      }
      , err => {
        console.warn(err);
      }
    );

  }

  getTechs() {

    try {
      this.techService.getAllTechs().subscribe(techs => {
        this.techs = techs;
      }, err => {
        console.warn(err);
      });

    } catch (error) {
      console.log(error);
    }
  }


}
