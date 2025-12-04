import type { User } from "../data/users";

export interface UserErrors {
  name?: string;
  email?: string;
  age?: string;
}

export const validateUser = (user: Partial<User>): UserErrors => {
  const errors: UserErrors = {};

  if (!user.name?.trim()) errors.name = "Name is required";

  if (!user.email?.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(user.email)) errors.email = "Invalid email";

  if (!user.age || user.age < 1) errors.age = "Age must be positive";

  return errors;
};
