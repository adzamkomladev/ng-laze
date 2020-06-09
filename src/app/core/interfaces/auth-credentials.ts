export interface AuthCredentials {
  username: string;
  password: string;
  role?: Role;
  remember: boolean;
}

type Role = 'STUDENT' | 'SERVICE_PROVIDER';
