"use client";
import React from "react";
import type { User } from "../data/users";
import { useUserForm } from "./UseUserForm";
import { UserFormFields } from "./UserFormField";

interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: User) => void;
  initialData?: User;
}

export const UserFormModal: React.FC<UserFormModalProps> = ({
  isOpen, onClose, onSubmit, initialData
}) => {
  const {
    name, setName,
    email, setEmail,
    role, setRole,
    status, setStatus,
    age, setAge,
    errors, validate, resetErrors
  } = useUserForm(initialData, isOpen);

  const handleSubmit = () => {
    if (!validate()) return;

    const user: User = {
      id: initialData ? initialData.id : Date.now(),
      name, email, role, status, age,
      created_at: initialData ? initialData.created_at : new Date().toISOString().split("T")[0],
    };

    onSubmit(user);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit User" : "Add User"}
        </h2>

        <UserFormFields
          name={name} setName={setName}
          email={email} setEmail={setEmail}
          role={role} setRole={setRole}
          status={status} setStatus={setStatus}
          age={age} setAge={setAge}
          errors={errors} resetErrors={resetErrors}
        />

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {initialData ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};
