"use client";

import { useAtom, useSetAtom } from "jotai";
import {
  usersAtom,
  searchTextAtom,
  selectedRolesAtom,
  selectedStatusesAtom,
} from "@store/userAtoms";
import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import type { GridOptions } from "ag-grid-community";
import type { User } from "../data/users";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Skeleton from "./Skeleton";
import { GridContext } from "config/gridContext";
import TableHeader from "./TableHeader";
import TableFilters from "./TableFilter";
import UserModalWrapper from "./UseModalWrapper";
import { useDebounce } from "../hooks/useDebounce";
import { columnDefs } from "config/columnDefs";
import { defaultColDef } from "config/defaultColDefs";
import { gridOptions } from "config/gridOptions";
import UserViewModal from "./UserViewModal";

interface AgUserTableProps { users: User[] }

export default function AgUserTable({ users: initialUsers }: AgUserTableProps) {
  const [users, setUsers] = useAtom(usersAtom);
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [selectedRoles, setSelectedRoles] = useAtom(selectedRolesAtom);
  const [selectedStatuses, setSelectedStatuses] = useAtom(selectedStatusesAtom);

  const gridRef = useRef<AgGridReact<User>>(null);
  const [loading, setLoading] = useState(true);

  const [viewUser, setViewUser] = useState<User | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);


  const debouncedSearchText = useDebounce(searchText, 300);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch =
        !debouncedSearchText ||
        user.name.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearchText.toLowerCase());
      const matchesRole = !selectedRoles.length || selectedRoles.includes(user.role);
      const matchesStatus = !selectedStatuses.length || selectedStatuses.includes(user.status);
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, debouncedSearchText, selectedRoles, selectedStatuses]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [users]);

  const toggleRole = useCallback((role: string) => {
    setSelectedRoles(prev => (prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]));
  }, []);

  const toggleStatus = useCallback((status: string) => {
    setSelectedStatuses(prev => (prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]));
  }, []);

  const clearFilters = useCallback(() => {
    setSearchText("");
    setSelectedRoles([]);
    setSelectedStatuses([]);
    gridRef.current?.api?.setFilterModel(null);
  }, []);

  const handleViewUser = (user: User) => setViewUser(user);


  const handleSubmitUser = (user: User) => {
    if (editingUser) setUsers(prev => prev.map(u => (u.id === editingUser.id ? user : u)));
    else setUsers(prev => [...prev, user]);
  };

  const { modalOpen, handleOpen, modalComponent } = UserModalWrapper({ onSubmit: handleSubmitUser, editingUser });
 
  const onAddUser = () => {
    setEditingUser(null); 
    handleOpen();         
  };

  const myGridOptions: GridOptions<User> = {
    ...gridOptions,
    context: {
      handleEditUser: (user: User) => {
        setEditingUser(user);
        handleOpen();
      },
      handleDeleteUser: (user: User) => setUsers(prev => prev.filter(u => u.id !== user.id)),
      handleViewUser,
    } as GridContext,
  };

  return (
    <div className="p-4 md:p-6">
      <TableHeader onAdd={onAddUser} />
      {modalComponent}
      <TableFilters
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedRoles={selectedRoles}
        toggleRole={toggleRole}
        selectedStatuses={selectedStatuses}
        toggleStatus={toggleStatus}
        clearFilters={clearFilters}
      />

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="ag-theme-quartz" style={{ width: "100%" }}>
          {loading ? <Skeleton /> : <AgGridReact
            ref={gridRef}
            rowData={filteredUsers}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={myGridOptions}
          />}
        </div>
      </div>
      {viewUser && (
      <UserViewModal
        user={viewUser}
        onClose={() => setViewUser(null)}
      />
    )}
    </div>
  );
}
