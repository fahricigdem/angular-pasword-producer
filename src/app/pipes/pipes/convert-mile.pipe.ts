import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMile'
})
export class ConvertMilePipe implements PipeTransform {

  transform(value: number, type?:string):number {
    // console.log(type);
    switch (type) {
      case "m":
        return value*1600;
      case "km":
        return value*1.6;
      default:
        throw new Error('type argument is undefined!');
    }
    
  }

}
