"use client";
import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import DrawerList from "./DrawerList";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center md:px-8 px-2">
        <div>
          <p>logo</p>
        </div>
        <div className=" md:flex gap-5 hidden">
          <p>home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className=" md:hidden">
          <Button onClick={handleDrawerOpen}>
            <FaAlignRight className="text-xl" />
          </Button>
          <Drawer open={open} onClose={handleDrawerOpen}>
            <DrawerList handleDrawerOpen={handleDrawerOpen}></DrawerList>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
