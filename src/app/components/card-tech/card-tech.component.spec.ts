import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechComponent } from './card-tech.component';

describe('CardTechComponent', () => {
  let component: CardTechComponent;
  let fixture: ComponentFixture<CardTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTechComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTechComponent);
    component = fixture.componentInstance;
    component.tech = {
      tech: 'ejemplo',
      year: 'ejemplo',
      author: 'ejemplo',
      license: 'ejemplo',
      language: 'ejemplo',
      type: 'ejemplo',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
