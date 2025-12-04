import React from "react";
import type { User } from "../data/users";

interface UserActionsProps {
  user: User;
  onView:(user:User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserActions({ user, onView, onEdit, onDelete }: UserActionsProps) {
  return (
    <div className="flex gap-2 mt-2">
      {onView && (
        <button
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-xs"
          onClick={() => onView(user)}
        >
          View
        </button>
      )}
      {onEdit && (
        <button
          onClick={() => onEdit(user)}
          className="px-2 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 text-xs"
        >
          Edit
        </button>
      )}
      {onDelete && (
        <button
          onClick={() => onDelete(user)}
          className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 text-xs"
        >
          Delete
        </button>
      )}
    </div>
  );
}
