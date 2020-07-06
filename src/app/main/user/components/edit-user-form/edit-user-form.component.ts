import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UploadFile } from 'ng-zorro-antd/upload';

import { EditUser } from '../../interfaces/edit-user';

@Component({
  selector: 'laze-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'],
})
export class EditUserFormComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() isSaveLoading: string;

  @Output() submitForm: EventEmitter<EditUser>;

  fileList: UploadFile[];
  form: FormGroup;
  file: UploadFile;

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    this.file = file;
    return false;
  };

  constructor(private fb: FormBuilder) {
    this.fileList = [];

    this.submitForm = new EventEmitter<EditUser>();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    this.submitForm.emit({ ...this.form.value, file: this.file } as EditUser);
  }

  private initializeForm(): void {
    this.form = this.fb.group(
      {
        fullname: [null, [Validators.required, Validators.maxLength(255)]],
        telephone: [null, [Validators.required]],
        careerDetails: [null, [Validators.required]],
        dateOfBirth: [null, [Validators.required]],
      },
      { updateOn: 'blur' },
    );
  }
}
