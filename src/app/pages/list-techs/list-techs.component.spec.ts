import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechsComponent } from './list-techs.component';
import { TechsService } from '../../services/techs.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { OrderbyPipe } from '../pipes/orderby.pipe';
import { Observable, from } from 'rxjs';
import { OnInit } from '@angular/core';




describe('ListTechsComponent', () => {
  let component: ListTechsComponent;
  let fixture: ComponentFixture<ListTechsComponent>;
  const techsService = new TechsService(null);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListTechsComponent,
        FilterPipe,
        OrderbyPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule,
      ],
      providers: [TechsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    component = new ListTechsComponent(techsService);
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get All Techs from Service', () => {
    const techsArray = [
      { tech: 'Node', type: 'Back-End' },
      { tech: 'React', type: 'Front-End' },
      { tech: 'Vue', type: 'Front-End' },
      { tech: 'Ruby on Rails', type: 'Back-End' },
      { tech: 'iOS', type: 'Mobile' },
      { tech: 'Android', type: 'Mobile' },
      { tech: 'Angular', type: 'Front-End' },
      { tech: 'React Native', type: 'Mobile' },
      { tech: 'Springboot', type: 'Back-End' },
    ];

    spyOn(techsService, 'getAllTechs').and.callFake(() => {
      return from([techsArray]);
    });

    component.ngOnInit();

    expect(component.techs.length).toBeGreaterThan(0);
  });


  it('get Count = 5 from Service', () => {
    const techService = new TechsService(null);

    techService.totalCount.subscribe(count => {

      component.count = count;
    });

    techService.totalCount.emit(5);

    expect(component.count).toBe(5);
  });


});
