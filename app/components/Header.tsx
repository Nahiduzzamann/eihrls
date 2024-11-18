"use client";
import { Drawer } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import DrawerList from "./DrawerList";
import LanguageToggleButton from "./LanguageToggleButton";
import { LanguageContext } from "../providers/LanguageProvider";

const Header = () => {
  const { language } = useContext(LanguageContext);
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
          <LanguageToggleButton></LanguageToggleButton>
          <p>{language === "en" ? "Home" : "হোম"}</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className=" md:hidden">
          <div onClick={handleDrawerOpen} className="cursor-pointer">
            <FaAlignRight className="text-xl text-blue-500 hover:text-blue-700" />
          </div>
          <Drawer open={open} onClose={handleDrawerOpen}>
            <DrawerList handleDrawerOpen={handleDrawerOpen}></DrawerList>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
export default Header;
