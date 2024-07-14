import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components/index";

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarLayout;