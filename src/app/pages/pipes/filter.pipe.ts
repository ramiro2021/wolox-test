import { EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { TechsService } from '../../services/techs.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  constructor(private techService: TechsService) {

  }

  transform(value: any, arg: any): any {

    let count: number = 0;

    const resultTechs = [];
    for (const tech of value) {
      if (
        tech.type.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        tech.tech.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        count++;
        resultTechs.push(tech);
      }
    }

    this.techService.totalCount.emit(count);
    return resultTechs;
  }

}
