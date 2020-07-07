import { Component, OnInit, Input } from '@angular/core';

import { Project } from 'src/app/main/interfaces/project';

@Component({
  selector: 'laze-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  get numberOfFiles(): number {
    let numberOfFiles = 0;

    if (this.project?.fileUrl) {
      numberOfFiles++;
    }

    if (this.project?.submittedFileUrl) {
      numberOfFiles++;
    }

    return numberOfFiles;
  }

  constructor() {}

  ngOnInit(): void {}
}
