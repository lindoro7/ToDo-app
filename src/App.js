import React from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./App.css";
import TodoLogo from "./todo-logo.svg";
import TodoList from "./components/TodoList";

function App() {
  const loadTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = React.useState(loadTodos());
  const [inputValue, setInputValue] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, status: "pending" };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodoStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === "done" ? "pending" : "done" }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const filteredTodos =
    filter === "done"
      ? todos.filter((todo) => todo.status === "done")
      : filter === "pending"
      ? todos.filter((todo) => todo.status === "pending")
      : todos;

  return (
    <div className='app-container'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        marginBottom={2}
      >
        <img
          src={TodoLogo}
          alt='TODO APP Logo'
          style={{ width: "200px", height: "auto" }}
        />
        <FormControl variant='outlined' size='small' style={{ minWidth: 150 }}>
          <InputLabel id='filter-label'>Фильтр</InputLabel>
          <Select
            labelId='filter-label'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label='Фильтр'
            style={{ backgroundColor: "white" }}
          >
            <MenuItem value=''>Все</MenuItem>
            <MenuItem value='done'>Выполненные</MenuItem>
            <MenuItem value='pending'>Не выполненные</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box display='flex' alignItems='center' marginBottom={2} width='100%'>
        <TextField
          variant='outlined'
          label='Введите задачу'
          size='small'
          style={{ flexGrow: 1, marginRight: "10px", backgroundColor: "white" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddClick();
            }
          }}
        />
        <Button variant='contained' color='primary' onClick={handleAddClick}>
          Добавить
        </Button>
      </Box>

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggleStatus={toggleTodoStatus}
      />
    </div>
  );
}

export default App;
