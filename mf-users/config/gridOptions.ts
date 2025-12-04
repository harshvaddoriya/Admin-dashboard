import type { GridOptions } from "ag-grid-community";

export const gridOptions: GridOptions = {
  rowBuffer: 20,
  suppressScrollOnNewData: true,
  animateRows: true,
  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 25, 50, 100],
  domLayout: "autoHeight",
  // ...( { virtualizationPageSize: 50 } as any ),
};
