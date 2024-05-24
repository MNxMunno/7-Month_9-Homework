import React from "react";
import circle from "@/assets/images/circle.svg";
import yellow from "@/assets/images/yellow.svg";
import img1 from "@/assets/images/post-8.png";
import img2 from "@/assets/images/post-9.png";
import Image from "next/image";

const About = () => {
  return (
    <main className="about">
      <section className="our">
        <div className="container">
          <div className="cards">
            <div className="card">
              <b>Our mision</b>
              <h1>
                Creating valuable content for creatives all around the world
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="card">
              <b>Our Vision</b>
              <h1>A platform that empowers individuals to improve</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-2">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h2>Our team of creatives</h2>
              <p className="text-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="card card1">
              <Image width={400} height={400} src={img2} alt="img" />
              <Image
                width={50}
                height={50}
                className="yellow"
                src={yellow}
                alt="yellow img"
              />
            </div>
            <div className="card card1">
              <Image width={400} height={400} src={img1} alt="img" />
              <Image
                width={50}
                height={50}
                src={circle}
                alt="circle"
                className="circle"
              />
            </div>
            <div className="card card2">
              <h2>Why we started this Blog</h2>
              <p className="text-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
