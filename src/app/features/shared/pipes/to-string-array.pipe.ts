import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStringArray',
})
export class ToStringArrayPipe implements PipeTransform {
  transform(value: string | boolean | number | string[] | unknown): string[] {
    if (typeof value === 'string') {
      return [value];
    }

    if (typeof value === 'boolean') {
      return [value.toString()];
    }

    if (typeof value === 'number') {
      return [value.toString()];
    }

    if (Array.isArray(value)) {
      if (typeof value?.[0] === 'string') {
        return value;
      }
      return value.map((el) => el.toString());
    }

    return [];
  }
}
