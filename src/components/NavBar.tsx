import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";

// import NavIcons from "./NavIcons";
const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/logo.png"} alt="" width={24} height={24} />
          <div className="text-2xl tracking-wide">BICI</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/logo.png"} alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">BICI</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"}>Homepage</Link>
            <Link href={"#categories"}>Categories</Link>
            <Link href={"#contact"}>Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
