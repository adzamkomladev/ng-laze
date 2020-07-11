import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UploadFile } from 'ng-zorro-antd/upload';

import { User } from 'src/app/core/interfaces/user';
import { Project } from 'src/app/main/interfaces/project';
import { ProjectData } from '../../interfaces/project-data';

@Component({
  selector: 'laze-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css'],
})
export class DetailsCardComponent implements OnInit {
  @Input() currentUser: User;
  @Input() selectedProject: Project;
  @Input() allUsers: User[];
  @Input() isSaveLoading: boolean;

  @Output() submitForm: EventEmitter<ProjectData>;

  form: FormGroup;
  file: UploadFile;
  fileList: UploadFile[];
  statuses: string[];
  beforeUpload: (file: UploadFile) => boolean;
  formatterCedi: (value: number) => string;
  parserCedi: (value: string) => number;

  constructor(private fb: FormBuilder) {
    this.submitForm = new EventEmitter<ProjectData>();
    this.initializeVariables();
    this.initializeForm();
  }

  ngOnInit(): void {
    this.reInitializeForm();
  }

  onSubmit(): void {
    const projectData: ProjectData = {
      ...this.form.value,
      file: this.file,
    };

    this.submitForm.emit(projectData);
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.maxLength(255)]],
      details: [null, [Validators.required]],
      deadline: [null, [Validators.required]],
      price: [0.0, [Validators.required]],
      status: [null, [Validators.required]],
      assigneeId: [null, [Validators.required]],
    });
  }

  private reInitializeForm(): void {
    const isAdmin = this.currentUser.role === 'ADMIN';
    const isOwner = this.selectedProject.ownerId === this.currentUser.id;
    const isAssignee = this.selectedProject.assigneeId === this.currentUser.id;

    this.form = this.fb.group({
      title: [
        { value: this.selectedProject.title, disabled: !isOwner },
        [Validators.required, Validators.maxLength(255)],
      ],
      details: [
        { value: this.selectedProject.details, disabled: !isOwner },
        [Validators.required],
      ],
      deadline: [
        {
          value: new Date(this.selectedProject.deadline),
          disabled: !isOwner,
        },
        [Validators.required],
      ],
      price: [
        { value: this.selectedProject.price ?? 0.0, disabled: !isAdmin },
        [Validators.required],
      ],
      status: [
        { value: this.selectedProject.status, disabled: isAssignee },
        [Validators.required],
      ],
      assigneeId: [
        { value: this.selectedProject.assigneeId, disabled: false },
        [Validators.required],
      ],
    });
  }

  private initializeVariables(): void {
    this.fileList = [];
    this.statuses = [
      'INITIATED',
      'PRICED',
      'ASSIGNED',
      'SUBMITTED',
      'INCORRECT',
      'APPROVED',
      'COMPLETED',
    ];

    this.beforeUpload = (file) => {
      this.fileList = this.fileList.concat(file);
      this.file = file;
      return false;
    };
    this.formatterCedi = (value) => `$ ${value}`;
    this.parserCedi = (value) => Number(value.replace('$ ', ''));
  }
}
