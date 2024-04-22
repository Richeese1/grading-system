import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const AdminDashboardItem = () => {
  return (
    <ListItem>
      <ListItemIcon></ListItemIcon>
      <ListItemText
        primary="Admin Dashboard"
        secondary="SMS Account Fundamentals"
      />
    </ListItem>
  );
};

export default AdminDashboardItem;
