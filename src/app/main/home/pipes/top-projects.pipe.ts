import { Pipe, PipeTransform } from '@angular/core';

import { Project } from '../../interfaces/project';

@Pipe({
  name: 'topProjects',
})
export class TopProjectsPipe implements PipeTransform {
  transform(value: Project[], ...args: unknown[]): Project[] {
    return value.filter((project) => Boolean(project.price));
  }
}
