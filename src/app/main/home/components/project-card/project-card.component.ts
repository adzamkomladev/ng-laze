import { Component, Input } from '@angular/core';

import { Project } from '../../../interfaces/project';

@Component({
  selector: 'laze-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project: Project;
}
