import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/main/interfaces/project';

@Component({
  selector: 'laze-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit(): void {}
}
