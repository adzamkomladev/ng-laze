import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Project } from '../interfaces/project';

@Injectable()
export class ProjectService {
  private readonly projectsBaseUrl: string;

  constructor(private http: HttpClient) {
    this.projectsBaseUrl = `${environment.apiUrl}/projects`;
  }

  findAll(): Observable<Project[]> {
    return this.http
      .get<Project[]>(this.projectsBaseUrl)
      .pipe(tap((p) => console.log({ p })));
  }

  create(createData: Partial<Project>): Observable<Project> {
    return this.http.post<Project>(this.projectsBaseUrl, { ...createData });
  }
}
