import { TestBed } from '@angular/core/testing';
import { LanguajeService } from './languaje.service';
import { TranslateModule, TranslateService, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

describe('LanguajeService', () => {
  let service: LanguajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateService],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ]
    });
    service = TestBed.inject(LanguajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
