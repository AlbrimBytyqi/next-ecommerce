"use client";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const wixClient = useWixClient();
  const IsLoggedIn = wixClient.auth.loggedIn();

  const { counter } = useCartStore();

  const handleProfile = () => {
    router.push("/profile");
    setOpen(false);
  };

  const handleLogin = () => {
    router.push("/login");
    setOpen(false);
  };

  const handleLogout = async () => {
    setOpen(false);
    setIsLoading(true);

    try {
      const { logoutUrl } = await wixClient.auth.logout(window.location.href);

      Cookies.remove("refreshToken"); // <- dopo il logout
      router.push(logoutUrl);
      router.push("/..");
      setIsLoading(false);
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoading(false);
    }
  };
  return (
    <div className="">
      <Image
        src={"/menu.png"}
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href={"/.."}>Homepage</Link>
          <a
            href="#categories"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Categories
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Contact
          </a>
          {/* <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link> */}

          <Link href={"/"}>Cart({counter})</Link>

          {/* {isProfileOpen || ( */}
          {/* <div className="">*/}
          {/* <Link href="/" onClick={handleProfile}>
            Profile
          </Link> */}
          {IsLoggedIn && (
            <div className="mt-2 cursor-pointer" onClick={handleProfile}>
              Profile
            </div>
          )}
          {IsLoggedIn ? (
            <div className="mt-2 cursor-pointer" onClick={handleLogout}>
              {isLoading ? "Logging out" : "Logout"}
            </div>
          ) : (
            <div className="mt-2 cursor-pointer" onClick={handleLogin}>
              Login
            </div>
          )}

          {/* <div className="mt-2 cursor-pointer" onClick={handleLogout}>
                {isLoading ? "Logging out" : "Logout"}
              </div> */
          /* </div> */}
          {/* )} */}
        </div>
      )}
    </div>
  );
};

export default Menu;
