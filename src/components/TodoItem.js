import React from "react";
import { Typography, Button, Box } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todo }) {
  return (
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
        {todo.text}
      </Typography>
      <Box display='flex' style={{ marginLeft: "10px" }}>
        <Button
          variant='outlined'
          color={todo.status === "done" ? "success" : "secondary"}
          style={{ marginRight: "5px", flexShrink: 0 }}
        >
          {todo.status === "done" ? (
            <DoneOutlineIcon />
          ) : (
            <PendingActionsIcon />
          )}
        </Button>
        <Button variant='outlined' color='error' style={{ flexShrink: 0 }}>
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default TodoItem;
