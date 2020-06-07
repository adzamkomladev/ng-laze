export interface AuthFormData {
  username: string;
  password: string;
  role?: Role;
  remember: boolean;
}

type Role = 'STUDENT' | 'SERVICE PROVIDER';
