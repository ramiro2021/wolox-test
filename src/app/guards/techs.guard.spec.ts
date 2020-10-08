import { TestBed } from '@angular/core/testing';

import { TechsGuard } from './techs.guard';

describe('TechsGuard', () => {
  let guard: TechsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TechsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
