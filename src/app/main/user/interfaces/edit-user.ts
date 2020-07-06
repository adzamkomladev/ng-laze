import { UploadFile } from 'ng-zorro-antd/upload';

export interface EditUser {
  fullname: string;
  telephone: string;
  careerDetails: string;
  dateOfBirth: Date;
  file?: UploadFile;
}
