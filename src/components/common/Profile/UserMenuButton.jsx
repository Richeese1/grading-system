import React from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function UserMenuButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    // 1. Clear user data from local storage (if applicable)
    localStorage.removeItem("user"); // Example, adjust based on your storage mechanism

    // 2. Redirect to the login page (or another appropriate route)
    if (typeof props.history !== "undefined") {
      // Check if history prop is available
      props.history.push("/grading-system");
    } else {
      // Handle the case where history prop is not available
      window.location.href = "/grading-system"; // Redirect using window.location
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-haspopup="true" onClick={handleClick}>
        <SvgIcon
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </SvgIcon>
        <span className="online-indicator" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default UserMenuButton;
