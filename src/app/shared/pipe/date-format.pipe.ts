import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    var splitendo = value as string;
    var splitted = splitendo?.toString().split(' ');
    var year = splitted[3];
    var month = splitted[2];
    var day = splitted[1];
    let date = year.concat(' ').concat(day).concat(' ').concat(month);
    return date;
    // return null;
  }

}