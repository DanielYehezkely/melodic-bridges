import React from "react";
import { Outlet } from "react-router";

const NavbarLayout = () => {
  return (
    <>
      <div className="NavbarLayout">
        <h1>navbar</h1>
        <Outlet/>
      </div>
    </>
  );
};

export default NavbarLayout;
