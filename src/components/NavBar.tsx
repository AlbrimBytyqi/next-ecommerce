import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:ps-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* LEFT */}
        <div className="w-1/3">
          <Image src={"/logo.png"} alt="" width={24} height={24} />
          <Link href={"/"} />
          <div className="text-2xl tracking-wide">LAMA</div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
};

export default NavBar;
