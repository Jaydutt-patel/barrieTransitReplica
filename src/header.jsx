import React from "react";
import { Back, Menu } from "./icons/icons";

const Header = () => {
  return (
    <div className="flex justify-start items-center">
      <Menu height={"40px"} width={"40px"} />
      <Back
        height={"40px"}
        width={"40px"}
        strokeWidth={`60`}
        className={`ml-6`}
      />
    </div>
  );
};

export default Header;
