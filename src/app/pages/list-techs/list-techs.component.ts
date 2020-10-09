import { Component, OnInit } from '@angular/core';
import { TechsService } from '../../services/techs.service';
import { Tech } from '../../models/tech.model';

@Component({
  selector: 'app-list-techs',
  templateUrl: './list-techs.component.html',
  styleUrls: ['./list-techs.component.css']
})
export class ListTechsComponent implements OnInit {

  techs: Tech[] = [];

  constructor(private techService: TechsService) { }

  ngOnInit(): void {
    this.getTechs();
  }

  getTechs() {

    try {
      this.techService.getAllTechs().subscribe(techs => {
        this.techs = techs;
        console.log(techs);
      });

    } catch (error) {
      console.log(error);
    }
  }


}
