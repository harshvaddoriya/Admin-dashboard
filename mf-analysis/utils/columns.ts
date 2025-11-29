import type { ColDef, GridOptions } from "ag-grid-community";

export const columnDefs: ColDef[] = [
  { headerName: "Name", field: "name", filter: "agTextColumnFilter", sortable: true, flex: 1.3, minWidth: 180 },
  { headerName: "Email", field: "email", filter: "agTextColumnFilter", flex: 1.6, minWidth: 220 },
  { headerName: "Role", field: "role", filter: "agSetColumnFilter", width: 130 },
  { headerName: "Status", field: "status", filter: "agSetColumnFilter", width: 130 },
  { headerName: "Age", field: "age", filter: "agNumberColumnFilter", width: 100, sortable: true },
  { headerName: "Created", field: "created_at", filter: "agDateColumnFilter", width: 200 },
];

export const defaultColDef: ColDef = {
  resizable: true,
  floatingFilter: true,
  suppressMenuHide: false,
};

export const gridOptions: GridOptions = {
  rowBuffer: 20,
  suppressScrollOnNewData: true,
  animateRows: true,
  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 25, 50, 100],
  domLayout: 'autoHeight',
};
