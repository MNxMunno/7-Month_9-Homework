import Image from "next/image";
import React from "react";

const Category = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/C52shZKZ/girl.png",
      type: "Business",
      title: "Top 6 free website mockup tools 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/C52shZKZ/girl.png",
      type: "Business",
      title: "Top 6 free website mockup tools 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/C52shZKZ/girl.png",
      type: "Business",
      title: "Top 6 free website mockup tools 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/C52shZKZ/girl.png",
      type: "Business",
      title: "Top 6 free website mockup tools 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
    },
  ];

  const card = data?.map((u) => (
    <div class="card">
      <div class="card-img">
        <Image src={u.img} alt={u.title} width={417} height={312} />
      </div>
      <div class="card__items">
        <p class="purple">{u.type}</p>
        <h2>{u.title}</h2>
        <p>{u.description}</p>
      </div>
    </div>
  ));

  return (
    <main className="category">
      <section className="business">
        <div className="container">
          <div className="category-content">
            <h1>Business</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="bold">Blog Business</p>
          </div>
        </div>
      </section>
      <section className="buss-category">
        <div className="container">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Searching ..."
            />
          </form>

          <div className="cards">{card}</div>
        </div>
      </section>
    </main>
  );
};

export default Category;
