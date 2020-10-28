import React, { useState } from "react";
import "./Root.css";
import TodoTable from "./components/TodoTable/TodoTable";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";

const Root = () => {
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("");

  const handlePrioritySelectChange = (e) => {
    setPriority(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const todoContent = e.target.addTodoInput.value;
    console.log(todoContent);
    console.log(priority);

    const newTodo = {
      id: todos.length + 1,
      todoContent,
      priority,
    };

    setTodos([...todos, newTodo]);

    e.target.reset();
    setPriority("");
  };

  return (
    <div className="Root">
      <h1>Todo app</h1>
      <AddTodoForm
        addTodo={addTodo}
        priority={priority}
        handlePrioritySelectChange={handlePrioritySelectChange}
      />
      <TodoTable todos={todos} />
    </div>
  );
};

export default Root;
