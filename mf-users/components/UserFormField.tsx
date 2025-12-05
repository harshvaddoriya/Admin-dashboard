import React from "react";
import type { User } from "../data/users";

interface UserFormFieldsProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  role: User["role"];
  setRole: (val: User["role"]) => void;
  status: User["status"];
  setStatus: (val: User["status"]) => void;
  age: number;
  setAge: (val: number) => void;
  errors: { [K in keyof User]?: string };
  resetErrors: (field: keyof User) => void;
}

export const UserFormFields: React.FC<UserFormFieldsProps> = ({
  name, setName,
  email, setEmail,
  role, setRole,
  status, setStatus,
  age, setAge,
  errors,
  resetErrors
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="text-xs font-medium text-gray-600">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); resetErrors("name"); }}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); resetErrors("email"); }}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-600">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as User["role"])}
            className="w-full px-3 py-2 border rounded-md"
          >
            {["Admin", "Manager", "User"].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-600">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as User["status"])}
            className="w-full px-3 py-2 border rounded-md"
          >
            {["Active", "Inactive", "Pending"].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      
      <div>
        <label className="text-xs font-medium text-gray-600">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => { setAge(Number(e.target.value)); resetErrors("age"); }}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
      </div>
    </div>
  );
};
