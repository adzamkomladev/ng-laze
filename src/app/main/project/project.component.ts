import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/core/interfaces/user';
import { Project } from '../interfaces/project';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  currentUser: User;
  selectedProject: Project;
  allUsers: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.selectedProject = this.route.snapshot.data['selectedProject'];
    this.allUsers = this.route.snapshot.data['allUsers'];
  }
}
