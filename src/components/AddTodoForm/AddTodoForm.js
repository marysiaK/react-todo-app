import React from "react";
import Button from "@material-ui/core/Button";
import AddTodoInput from "../AddTodoInput/AddTodoInput";
import AddTodoPrioritySelect from "../AddTodoPrioritySelect/AddTodoPrioritySelect";

const AddTodoForm = ({ priority, handlePrioritySelectChange, addTodo }) => {
  return (
    <form
      onSubmit={addTodo}
      style={{
        width: "50%",
        margin: "auto",
        marginBottom: "35px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AddTodoInput />
      <AddTodoPrioritySelect
        priority={priority}
        handlePrioritySelectChange={handlePrioritySelectChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "20px" }}
        type="submit"
      >
        Add todo
      </Button>
    </form>
  );
};

export default AddTodoForm;
