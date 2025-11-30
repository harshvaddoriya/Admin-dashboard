import type { ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
  { headerName: "Name", field: "name", filter: "agTextColumnFilter", sortable: true, flex: 1.3, minWidth: 180 },
  { headerName: "Email", field: "email", filter: "agTextColumnFilter", flex: 1.6, minWidth: 220 },
  { headerName: "Role", field: "role", filter: "agSetColumnFilter", width: 130, sortable: true },
  { headerName: "Status", field: "status", filter: "agSetColumnFilter", width: 130, sortable: true },
  { headerName: "Created", field: "created_at", filter: "agDateColumnFilter", width: 160, sortable: true },
];
