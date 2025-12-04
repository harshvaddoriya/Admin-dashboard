declare module "analysis/data" {
  export interface User {
    name: string;
    email?: string;
    role?: string;
    status: string;
    [key: string]: any;
  }

  export const users: User[];
}