import React from "react";
import UI_IMG from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 flex items-center justify-center">
        <h2 className="w-full text-lg font-medium text-black">{children}</h2>
      </div>
      <div className="hidden md:flex h-screen items-center justify-center bg-blue-50 bg-cover bg-no-repeat bg-center overflow-hidden">
        <img src={UI_IMG} alt="" className="" />
      </div>
    </div>
  );
};

export default AuthLayout;
