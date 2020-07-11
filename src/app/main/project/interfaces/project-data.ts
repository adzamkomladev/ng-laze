import { UploadFile } from 'ng-zorro-antd';

export interface ProjectData {
  title: string;
  details: string;
  deadline: string | Date;
  price: number;
  status: string;
  assigneeId: number;
  file?: UploadFile | File;
}
