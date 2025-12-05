import type { ColDef, ICellRendererParams } from "ag-grid-community";
import type { User } from "../data/users";
// import { GridContext } from "./gridContext";
import UserActions from "@components/UserActions";

export const columnDefs: ColDef<User>[] = [
  { headerName: "Name", field: "name", filter: "agTextColumnFilter", sortable: true, flex: 1.3, minWidth: 180 },
  { headerName: "Email", field: "email", filter: "agTextColumnFilter", flex: 1.6, minWidth: 220 },
  { headerName: "Role", field: "role", filter: "agSetColumnFilter", width: 130, sortable: true },
  { headerName: "Status", field: "status", filter: "agSetColumnFilter", width: 130, sortable: true },
  { headerName: "Created", field: "created_at", filter: "agDateColumnFilter", width: 160, sortable: true },

  {
    headerName: "Actions",
    width: 180,
    cellRenderer: (params: ICellRendererParams<User>) => (
      <UserActions
        user={params.data!}
        onEdit={params.context?.handleEditUser}
        onDelete={params.context?.handleDeleteUser}
        onView={params.context?.handleViewUser!}
      />
    ),
  },
];
