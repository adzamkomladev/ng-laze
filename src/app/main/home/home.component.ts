import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../core/interfaces/user';
import { Project } from '../interfaces/project';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: User;
  allUsers: User[];
  allProjects: Project[];
  userProjects: Project[];

  constructor(private route: ActivatedRoute) {
    this.userProjects = [];
  }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.data['currentUser'];
    this.allUsers = this.route.snapshot.data['allUsers'];
    this.allProjects = this.route.snapshot.data['allProjects'];
    this.userProjects = this.allProjects.filter(
      (project) =>
        project.ownerId === this.currentUser.id ||
        project.assigneeId === this.currentUser.id
    );
  }
}
