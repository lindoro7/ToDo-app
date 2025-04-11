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

import mockTodos from "./Todos";

function App() {
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
            defaultValue=''
            label='Фильтр'
            style={{ backgroundColor: "white" }}
          >
            <MenuItem value=''>Все</MenuItem>
            <MenuItem value={1}>Выполненные</MenuItem>
            <MenuItem value={2}>Не выполненные</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box display='flex' alignItems='center' marginBottom={2} width='100%'>
        <TextField
          variant='outlined'
          label='Введите задачу'
          size='small'
          style={{ flexGrow: 1, marginRight: "10px", backgroundColor: "white" }}
        />
        <Button variant='contained' color='primary'>
          Добавить
        </Button>
      </Box>
      <TodoList todos={mockTodos} />
    </div>
  );
}

export default App;
