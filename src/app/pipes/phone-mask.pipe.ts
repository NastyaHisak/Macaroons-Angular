import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneMask'
})
export class PhoneMaskPipe implements PipeTransform {

  transform(value: string): string {
    const regex = /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/;
    return value.replace(regex, '+$1 ($2) $3-$4-$5');
  }

}
