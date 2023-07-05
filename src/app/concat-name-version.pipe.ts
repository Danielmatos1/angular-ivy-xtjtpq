import { Pipe, PipeTransform, VERSION } from '@angular/core';

@Pipe({
  name: 'concatNameVersion',
})
export class ConcatNameVersionPipe implements PipeTransform {
  transform(value: string): string {
    return `${value} ${VERSION.major}`;
  }
}
