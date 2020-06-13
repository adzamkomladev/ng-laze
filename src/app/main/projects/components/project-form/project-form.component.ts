import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UploadFile } from 'ng-zorro-antd/upload';

import { ProjectFormService } from '../../services/project-form.service';

@Component({
  selector: 'laze-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit, OnDestroy {
  fileList: UploadFile[];
  form: FormGroup;
  valueChangesSubscription: Subscription;

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    this.projectFormService.addFile(file);
    return false;
  };

  constructor(
    private fb: FormBuilder,
    private projectFormService: ProjectFormService,
  ) {
    this.fileList = [];
  }

  ngOnInit(): void {
    this.initializeForm();
    this.setupFormListener();
  }

  ngOnDestroy(): void {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  private initializeForm(): void {
    this.form = this.fb.group(
      {
        title: [null, [Validators.required, Validators.maxLength(255)]],
        details: [null, [Validators.required]],
        deadline: [null, [Validators.required]],
      },
      { updateOn: 'blur' },
    );
  }

  private setupFormListener(): void {
    this.valueChangesSubscription = this.form.valueChanges
      .pipe(
        tap((value) => {
          this.projectFormService.setFormValue(value);
          this.projectFormService.setFormValidity(this.form.valid);
        }),
      )
      .subscribe();
  }
}
