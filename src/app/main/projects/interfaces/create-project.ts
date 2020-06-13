import { UploadFile } from 'ng-zorro-antd/upload';

export interface CreateProject {
  title: string;
  details: string;
  deadline: Date;
  file?: UploadFile;
}
