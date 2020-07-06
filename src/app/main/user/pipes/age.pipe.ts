import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  private year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  transform(value: Date | string): string {
    const birthYear = new Date(value)?.getFullYear() ?? this.year;

    return `${this.year - birthYear} yrs`;
  }
}
