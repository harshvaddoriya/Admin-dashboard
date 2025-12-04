export interface User {
  name: string;
  email: string;
  role: "Admin" | "Manager" | "User" | string;
  status: "Active" | "Inactive" | "Pending" | string;
  age: number; 
}