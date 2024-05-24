import Banner from "@/static/banner/Banner";
import Product from "@/static/product/Product";
import React from "react";
import {
  BsBuildingsFill,
  BsGraphUpArrow,
  BsRocketTakeoffFill,
} from "react-icons/bs";
import { FaHeadSideMask } from "react-icons/fa6";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=3");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home = async () => {
  let data = await getData();
  // console.log(data);
  return (
    <main className="home">
      <Banner />
      <Product data={data?.products} />
      <section className="choose">
        <div className="container">
          <div className="choose-content">
            <h4>Choose A Catagory</h4>
            <div className="cards">
              <div className="card">
                <BsBuildingsFill size={30} />
                <h5>Business</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>

              <div className="card">
                <BsRocketTakeoffFill size={30} />
                <h5>Startup</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>

              <div className="card">
                <BsGraphUpArrow size={30} />
                <h5>Economy</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>

              <div className="card">
                <FaHeadSideMask size={30} />
                <h5>Technology</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
