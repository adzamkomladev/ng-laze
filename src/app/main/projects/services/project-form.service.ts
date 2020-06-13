import { Injectable } from '@angular/core';

import { UploadFile } from 'ng-zorro-antd/upload';

import { CreateProject } from '../interfaces/create-project';

@Injectable()
export class ProjectFormService {
  private formValidity: boolean;
  private formValue: CreateProject;

  setFormValue(formValue: CreateProject): void {
    this.formValue = { ...formValue, file: this.formValue?.file };
  }

  addFile(file: UploadFile): void {
    this.formValue.file = file;
  }

  getFormValue(): CreateProject {
    return { ...this.formValue };
  }

  setFormValidity(validity: boolean): void {
    this.formValidity = validity;
  }

  getFormValidity(): boolean {
    return this.formValidity;
  }
}
