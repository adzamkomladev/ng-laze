import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Project } from '../interfaces/project';

@Injectable()
export class ProjectService {
  private readonly projectsBaseUrl: string;

  constructor(private http: HttpClient) {
    this.projectsBaseUrl = `${environment.apiUrl}/projects`;
  }

  create(createData: Partial<Project>): Observable<Project> {
    return this.http.post<Project>(this.projectsBaseUrl, { ...createData });
  }
}
