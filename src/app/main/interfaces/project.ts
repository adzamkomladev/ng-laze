import { User } from '../../core/interfaces/user';

export interface Project {
  id: number;
  ownerId: number;
  owner?: User;
  assigneeId?: number;
  assignee?: User;
  title: string;
  details: string;
  deadline: Date;
  fileUrl?: string;
  status: Status;
  price?: number;
  submitText?: string;
  submittedFileUrl?: string;
  dateSubmitted?: Date;
  dateAssigned?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

type Status =
  | 'INITIATED'
  | 'PRICED'
  | 'ASSIGNED'
  | 'SUBMITTED'
  | 'INCORRECT'
  | 'APPROVED'
  | 'COMPLETED';
