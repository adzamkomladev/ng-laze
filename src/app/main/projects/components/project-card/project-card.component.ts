import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Project } from 'src/app/main/interfaces/project';
import { User } from 'src/app/core/interfaces/user';

import { ProjectAction } from '../../types/project-action.type';

@Component({
  selector: 'laze-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Input() currentUser: User;

  @Output() projectAction: EventEmitter<ProjectAction>;

  get canEdit(): boolean {
    return (
      this.project.ownerId === this.currentUser.id ||
      this.project?.assigneeId === this.currentUser.id ||
      this.currentUser.role === 'ADMIN'
    );
  }
  constructor() {
    this.projectAction = new EventEmitter<ProjectAction>();
  }

  onProjectAction(projectAction: ProjectAction): void {
    this.projectAction.emit(projectAction);
  }
}
