import { useState, useEffect } from "react";
import type { User } from "../data/users";
import { validateUser, UserErrors } from "../config/validateUser";

export const useUserForm = (initialData?: User, isOpen?: boolean) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [role, setRole] = useState<User["role"]>(initialData?.role || "User");
  const [status, setStatus] = useState<User["status"]>(initialData?.status || "Active");
  const [age, setAge] = useState<number>(initialData?.age || 18);
  const [errors, setErrors] = useState<UserErrors>({});


  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setRole(initialData.role);
      setStatus(initialData.status);
      setAge(initialData.age);
      setErrors({});
    }
  }, [initialData]);

  // Reset form for Add User
  useEffect(() => {
    if (isOpen && !initialData) {
      setName("");
      setEmail("");
      setRole("User");
      setStatus("Active");
      setAge(18);
      setErrors({});
    }
  }, [isOpen, initialData]);

  const validate = () => {
    const errs = validateUser({ name, email, age });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const resetErrors = (field: keyof User) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return {
    name, setName,
    email, setEmail,
    role, setRole,
    status, setStatus,
    age, setAge,
    errors, validate, resetErrors
  };
};
