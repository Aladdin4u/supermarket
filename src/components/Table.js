import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function TransactionTable({ rows }) {
  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "ID", minWidth: 70, hideable: true },
      { field: "desc", headerName: "Description", minWidth: 200 },
      {
        field: "date",
        headerName: "Date",
        type: "date",
        minWidth: 300,
        valueFormatter: (params) => new Date(params).toLocaleString(),
      },
      {
        field: "receipt",
        type: "actions",
        width: 80,
        sortable: false,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="view"
            onClick={() => (window.location.href = params.row.receipt)}
          />,
        ],
      },
    ],
    []
  );
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
