import { UploadFile } from 'ng-zorro-antd/upload';

import { User } from '../../core/interfaces/user';

export interface Project {
  id: number;
  ownerId: number;
  owner?: User;
  assigneeId?: number;
  assignee?: User;
  title: string;
  details: string;
  deadline: Date | string;
  fileUrl?: string;
  file?: File | UploadFile;
  status: Status;
  price?: number;
  submitText?: string;
  submittedFileUrl?: string;
  dateSubmitted?: Date | string;
  dateAssigned?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export type Status =
  | 'INITIATED'
  | 'PRICED'
  | 'ASSIGNED'
  | 'SUBMITTED'
  | 'INCORRECT'
  | 'APPROVED'
  | 'COMPLETED';
