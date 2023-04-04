import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTitleCase'
})
export class ToTitleCasePipe implements PipeTransform {

  transform(object:any,oldKey:string,newKey:string): unknown {
    Object.defineProperty(object, newKey,
      Object.getOwnPropertyDescriptor(object, oldKey));
       delete object[oldKey];
        return object;
  }

}
