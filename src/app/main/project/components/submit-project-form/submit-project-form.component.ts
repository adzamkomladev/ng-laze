import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UploadFile } from 'ng-zorro-antd/upload';

import { SubmitProjectFormService } from '../../services/submit-project-form.service';

@Component({
  selector: 'laze-submit-project-form',
  templateUrl: './submit-project-form.component.html',
  styleUrls: ['./submit-project-form.component.css'],
})
export class SubmitProjectFormComponent implements OnInit, OnDestroy {
  fileList: UploadFile[];
  form: FormGroup;
  valueChangesSubscription: Subscription;

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    this.submitProjectFormService.addFile(file);
    return false;
  };

  constructor(
    private fb: FormBuilder,
    private submitProjectFormService: SubmitProjectFormService,
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
        submitText: [null, [Validators.required]],
      },
      { updateOn: 'blur' },
    );
  }

  private setupFormListener(): void {
    this.valueChangesSubscription = this.form.valueChanges
      .pipe(
        tap((value) => {
          this.submitProjectFormService.setFormValue(value);
          this.submitProjectFormService.setFormValidity(this.form.valid);
        }),
      )
      .subscribe();
  }
}
