import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UploadFile } from 'ng-zorro-antd/upload';

import { User } from 'src/app/core/interfaces/user';
import { EditUser } from '../../interfaces/edit-user';

@Component({
  selector: 'laze-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'],
})
export class EditUserFormComponent implements OnChanges {
  @Input() errorMessage: string;
  @Input() isSaveLoading: string;
  @Input() user: User;

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

    this.initializeForm(this.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const user = changes?.user?.currentValue;

    this.initializeForm(user);
  }

  onSubmit(): void {
    this.submitForm.emit({ ...this.form.value, file: this.file } as EditUser);
  }

  private initializeForm(user: User): void {
    this.form = this.fb.group(
      {
        fullName: [
          user?.fullName,
          [Validators.required, Validators.maxLength(255)],
        ],
        telephone: [user?.telephone, [Validators.required]],
        email: [user?.email, [Validators.required, Validators.maxLength(255)]],
        careerDetails: [user?.careerDetails, [Validators.required]],
        dateOfBirth: [user?.dateOfBirth, [Validators.required]],
      },
      { updateOn: 'blur' },
    );
  }
}
