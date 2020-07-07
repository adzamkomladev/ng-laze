import { Project } from 'src/app/main/interfaces/project';

export interface User {
  id?: number;
  username: string;
  role: Role;
  approved: boolean;
  fullName?: string;
  dateOfBirth?: Date | string;
  careerDetails?: string;
  telephone?: string;
  email?: string;
  projectsOwned: Project[];
  projectsAssigned: Project[];
  profileImageUrl?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

type Role = 'STUDENT' | 'SERVICE_PROVIDER' | 'ADMIN';
