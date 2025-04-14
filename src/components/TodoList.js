import React from "react";
import { Box } from "@mui/material";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggleStatus }) {
  return (
    <Box width='100%'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </Box>
  );
}

export default TodoList;
