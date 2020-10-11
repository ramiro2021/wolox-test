import { EventEmitter, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  switchLanguage(languaje: string) {

    this.translate.use(languaje);
  }


}
