import type { User } from "../data/users";

export interface GridContext {
  handleViewUser: (user: User) => void;
  handleEditUser: (user: User) => void;
  handleDeleteUser: (user: User) => void;
}
