import React from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import TodoLogo from "./todo-logo.svg";

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

      <Box width='100%'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          marginBottom={1}
          padding={2}
          borderRadius={1}
          boxShadow={1}
          bgcolor='#f9f9f9'
        >
          <Typography variant='body1' style={{ flexGrow: 1 }}>
            Задача 1: Написать отчет о проделанной работе за неделю и
            подготовить презентацию для команды.
          </Typography>
          <Box display='flex' style={{ marginLeft: "10px" }}>
            <Button
              variant='outlined'
              color='success'
              style={{ marginRight: "5px", flexShrink: 0 }}
            >
              <DoneOutlineIcon />
            </Button>
            <Button variant='outlined' color='error' style={{ flexShrink: 0 }}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          marginBottom={1}
          padding={2}
          borderRadius={1}
          boxShadow={1}
          bgcolor='#f9f9f9'
        >
          <Typography variant='body1' style={{ flexGrow: 1 }}>
            Задача 2: Провести анализ рынка и подготовить список потенциальных
            клиентов для нашего нового продукта.
          </Typography>
          <Box display='flex' style={{ marginLeft: "10px" }}>
            <Button
              variant='outlined'
              style={{
                marginRight: "5px",
                flexShrink: 0,
                color: "#FFA500",
                borderColor: "#FFA500",
              }}
            >
              <PendingActionsIcon />
            </Button>
            <Button variant='outlined' color='error' style={{ flexShrink: 0 }}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          marginBottom={1}
          padding={2}
          borderRadius={1}
          boxShadow={1}
          bgcolor='#f9f9f9'
        >
          <Typography variant='body1' style={{ flexGrow: 1 }}>
            Задача 3: Обновить документацию по проекту, чтобы она
            соответствовала текущему состоянию разработки и тестирования.
          </Typography>
          <Box display='flex' style={{ marginLeft: "10px" }}>
            <Button
              variant='outlined'
              color='success'
              style={{ marginRight: "5px", flexShrink: 0 }}
            >
              <DoneOutlineIcon />
            </Button>
            <Button variant='outlined' color='error' style={{ flexShrink: 0 }}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          marginBottom={1}
          padding={2}
          borderRadius={1}
          boxShadow={1}
          bgcolor='#f9f9f9'
        >
          <Typography variant='body1' style={{ flexGrow: 1 }}>
            Задача 4: Подготовить отчет о расходах за месяц и представить его на
            следующем собрании команды.
          </Typography>
          <Box display='flex' style={{ marginLeft: "10px" }}>
            <Button
              variant='outlined'
              style={{
                marginRight: "5px",
                flexShrink: 0,
                color: "#FFA500",
                borderColor: "#FFA500",
              }}
            >
              <PendingActionsIcon />
            </Button>
            <Button variant='outlined' color='error' style={{ flexShrink: 0 }}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          marginBottom={1}
          padding={2}
          borderRadius={1}
          boxShadow={1}
          bgcolor='#f9f9f9'
        >
          <Typography variant='body1' style={{ flexGrow: 1 }}>
            Задача 5: Провести встречу с клиентом для обсуждения требований к
            новому проекту и уточнения деталей.
          </Typography>
          <Box display='flex' style={{ marginLeft: "10px" }}>
            <Button
              variant='outlined'
              color='success'
              style={{ marginRight: "5px", flexShrink: 0 }}
            >
              <DoneOutlineIcon />
            </Button>
            <Button variant='outlined' color='error' style={{ flexShrink: 0 }}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
