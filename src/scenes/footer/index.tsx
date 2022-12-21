import React from "react";
import Logo from "@/assets/logo.png";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="h-20">
      <div className="flex h-full w-full items-center justify-center gap-8 ">
        <img src={Logo} alt="logo" className="h-6  object-cover" />
        <div>
          <p>© 2022</p>
        </div>
      </div>
    </div>
  );
};

export default index;
