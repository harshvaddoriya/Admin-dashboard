import React, { useState } from "react";
import { User } from "../data/users";
import { UserFormModal } from "./UserFormModel";

interface UserModalWrapperProps {
  onSubmit: (user: User) => void;
  editingUser?: User;
}

export default function UserModalWrapper({ onSubmit, editingUser }: UserModalWrapperProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleSubmit = (user: User) => {
    onSubmit(user);
    setModalOpen(false);
  };

  return {
    modalOpen,
    handleOpen,
    handleClose,
    modalComponent: (
      <UserFormModal
        isOpen={modalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        initialData={editingUser}
      />
    ),
  };
}
