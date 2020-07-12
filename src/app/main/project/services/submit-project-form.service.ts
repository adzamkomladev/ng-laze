import { Injectable } from '@angular/core';

import { UploadFile } from 'ng-zorro-antd/upload';

import { SubmitProjectData } from '../interfaces/submit-project-data';

@Injectable()
export class SubmitProjectFormService {
  private formValidity: boolean;
  private formValue: SubmitProjectData;

  setFormValue(formValue: SubmitProjectData): void {
    this.formValue = { ...formValue, file: this.formValue?.file };
  }

  addFile(file: UploadFile): void {
    this.formValue.file = file;
  }

  getFormValue(): SubmitProjectData {
    return { ...this.formValue };
  }

  setFormValidity(validity: boolean): void {
    this.formValidity = validity;
  }

  getFormValidity(): boolean {
    return this.formValidity;
  }
}
