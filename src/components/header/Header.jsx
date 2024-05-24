// import Home from "@/app/home/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-items">
            <Link className="logo" href={"/"}>
              <Image src={logo} alt="logo" width={100} height={50} />
            </Link>
            <div className="nav_items">
              <Link href={"/"}>Home</Link>
              <Link href={"/category"}>Category</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"login"}>Login</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
