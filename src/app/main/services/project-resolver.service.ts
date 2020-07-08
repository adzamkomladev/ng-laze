import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { ProjectService } from './project.service';

import { Project } from '../interfaces/project';

@Injectable()
export class ProjectResolverService implements Resolve<Project> {
  constructor(private projectService: ProjectService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Project> | Promise<Project> | Project {
    const id = Number(route.paramMap.get('id'));

    return this.projectService.findOneById(id);
  }
}
