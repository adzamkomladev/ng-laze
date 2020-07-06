import { UploadFile } from 'ng-zorro-antd/upload';

export interface EditUser {
  fullName: string;
  email: string;
  telephone: string;
  careerDetails: string;
  dateOfBirth: Date;
  file?: UploadFile;
}
