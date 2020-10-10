import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {
  transform(value: any[], arg: any): any[] {

    if (arg === 'desc') {
      return value.sort((a, b) => {
        if (a.tech.toLowerCase() < b.tech.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }

      });
    } else if (arg === 'asc') {
      return value.sort((a, b) => {
        if (a.tech.toLowerCase() > b.tech.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }

      });
    } else {

      return value;
    }


  }

}
