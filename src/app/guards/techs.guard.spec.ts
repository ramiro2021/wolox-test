
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { TechsGuard } from './techs.guard';

describe('TechsGuard', () => {
  let guard: TechsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        TechsGuard,
        AuthService,

      ]
    });
    guard = TestBed.inject(TechsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
