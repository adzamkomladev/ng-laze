import { UploadFile } from 'ng-zorro-antd';

import { Status } from 'src/app/main/interfaces/project';
export interface ProjectData {
  title: string;
  details: string;
  deadline: string | Date;
  price: number;
  status: Status;
  assigneeId: number;
  file?: UploadFile | File;
}
