import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="hero-content">
          <p>
            Posted on <b>startup</b>
          </p>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <p>
            By <b className="yellow">James West</b> | May 23, 2022
          </p>
          <p className="duis">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Link className="link" href={"/about"}>
            Read More <FaAngleRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
