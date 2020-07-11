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

  findOneById(id: number): Observable<Project> {
    return this.http
      .get<Project>(`${this.projectsBaseUrl}/${id}`)
      .pipe(tap((pp) => console.log({ pp })));
  }

  create(createData: Partial<Project>): Observable<Project> {
    return this.http.post<Project>(this.projectsBaseUrl, { ...createData });
  }

  update(updateData: Partial<Project>): Observable<void> {
    const updateProjectUrl = `${this.projectsBaseUrl}/${updateData.id}`;
    return this.http.patch<void>(updateProjectUrl, { ...updateData });
  }
}
