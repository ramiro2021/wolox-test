import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTechComponent } from './card-tech.component';

describe('CardTechComponent', () => {
  let component: CardTechComponent;
  let fixture: ComponentFixture<CardTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
