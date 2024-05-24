"use client";

import Image from "next/image";
import React from "react";

const Product = ({ data }) => {
  console.log(data);
  const card = data?.map((el) => (
    <div className="card" key={el.id}>
      <Image
        className="img"
        src={el.images[0]}
        width={405}
        height={318}
        alt={el.title}
      />
      <h3 title={el.title}>{el.title}</h3>
      <p title={el.description}>{el.description}</p>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <h1>Popular blogs</h1>
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Product;
