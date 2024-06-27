import * as React from "react";
import { Link  } from "react-router-dom";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function TransactionTable({ rows }) {
  const viewReceipt = (params) => {
    console.log(params);
    <Link to={params} target="_blank" />;
  };

  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "ID", minWidth: 70, hideable: true },
      { field: "desc", headerName: "Description", minWidth: 130 },
      { field: "date", headerName: "Date", type: 'date', minWidth: 130, valueFormatter: params => new Date(params).toLocaleString() },
      {
        field: "receipt",
        type: "actions",
        width: 80,
        sortable: false,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="view"
            onClick={() => console.log(params.row.receipt)}
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
