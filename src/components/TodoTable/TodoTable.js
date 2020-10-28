import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const button = () => (
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
);

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "todoContent", headerName: "Todo", width: 350 },
  { field: "priority", headerName: "Priority", width: 150 },
  { field: "deleteButton", headerName: "Delete", width: 50 },
];

const test = [
  {
    id: 1,
    todoContent: "test",
    priority: "low",
    deleteButton: button(),
  },
];

const TodoTable = ({ todos }) => {
  return (
    <div style={{ height: 400, width: "50%", margin: "auto" }}>
      <DataGrid rows={test} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default TodoTable;
