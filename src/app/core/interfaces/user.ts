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
  profileImageUrl?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

type Role = 'STUDENT' | 'SERVICE_PROVIDER' | 'ADMIN';
