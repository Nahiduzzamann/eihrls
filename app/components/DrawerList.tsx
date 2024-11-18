"use client";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { FaTimes } from "react-icons/fa";
interface DrawerListProps {
  handleDrawerOpen: () => void;
}
const DrawerList: React.FC<DrawerListProps> = ({ handleDrawerOpen }) => {
  return (
    <div>
      <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerOpen}>
        <div className="flex justify-between items-center p-3">
          <p>Menu</p>
          <FaTimes
            onClick={handleDrawerOpen}
            className="cursor-pointer border border-blue-500 text-blue-500 hover:text-blue-700 text-lg rounded"
          />
        </div>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? "<InboxIcon />" : "<MailIcon />"}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ marginX: 2 }} />
      </Box>
    </div>
  );
};
export default DrawerList;
