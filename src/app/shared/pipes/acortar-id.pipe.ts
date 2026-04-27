import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acortarId',
  standalone: true,
})
export class AcortarIdPipe implements PipeTransform {
  transform(value: string | number): string {
    const stringValue = value.toString();

    return stringValue.length > 5 ? stringValue.slice(0, 5) + '...' : stringValue;
  }
}
