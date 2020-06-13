import { Component, OnInit } from '@angular/core';
import { ProjectFormService } from './services/project-form.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  isModalVisible: boolean;
  isSaveLoading: boolean;

  constructor(private projectFormService: ProjectFormService) {
    this.isModalVisible = this.isSaveLoading = false;
  }

  ngOnInit(): void {}

  onOpenModal(): void {
    this.isModalVisible = true;
  }

  onSaveProject(): void {
    if (!this.projectFormService.getFormValidity()) {
      return;
    }

    console.log({ form: this.projectFormService.getFormValue() });
  }

  onCancel(): void {
    this.isModalVisible = false;
  }
}
