import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { ProjectService } from './project.service';

import { Project } from '../interfaces/project';

@Injectable()
export class ProjectsResolverService implements Resolve<Project[]> {
  constructor(private projectService: ProjectService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Project[]> | Promise<Project[]> | Project[] {
    return this.projectService.findAll();
  }
}
