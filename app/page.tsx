"use client";

import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const chefs = [
  { name: "Aiden Hunter", image: "aiden.jpg", tag: "Founder" },
  { name: "Ethel Ramsey", image: "ethel.jpg", tag: "Co-Founder" },
  { name: "Fannie Stewart", image: "fainel.jpg", tag: "Co-Founder" },
];
const statistics = [
  { value: "7k", name: "Customer" },
  { value: "109", name: "Outlets" },
  { value: "55", name: "Countries" },
];

const packages = [
  { value: "10", name: "Package I" },
  { value: "20", name: "Package II" },
  { value: "30", name: "Package III" },
];

export default function Home() {
  return (
    <main>
      <section>
        <header className="absolute inset-x-0 top-0 z-10">
          <nav
            className="flex items-center justify-between p-6 lg:p-8 lg:px-36"
            aria-label="Restaurant"
          >
            <h3 className="font-bold text-2xl text-white">Logo</h3>
            <div className="flex flex-row">
              <div className="lg:flex lg:gap-x-16 ">
                {navigation?.map((e: any) => (
                  <a
                    key={e.name}
                    className="leading-6 text-white font-medium text-2xl hover:cursor-pointer hover:underline"
                  >
                    {e?.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <div className="relative isolate overflow-hidden ">
          <img
            src={"/background.jpg"}
            alt="Restaurant Image"
            className="absolute inset-0 -z-10 w-screen h-screen object-cover"
          />
          <div
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl  sm:-top-80"
            aria-hidden="true"
          >
            <div className="relative  aspect-[1455/578]  bg-gradient-to-tr from-[#0c0709] to-[#030212] opacity-80  sm:w-full" />
          </div>

          <div className="w-1/2 h-screen px-28 leading-relaxed py-24">
            <h4 className="text-white text-start font-bold text-7xl h-auto pt-20 ">
              Get Cashback <br /> up to 50%
            </h4>
            <p className="text-white font-light py-14">
              The aroma of freshly baked bread mingled with the scent of
              simmering garlic and herbs, filling the cozy kitchen. A pot of
              rich, creamy tomato soup bubbled gently on the stove, promising
              warmth and comfort. Nearby, a platter of vibrant, roasted
              vegetables awaited their turn to delight eager taste buds.
            </p>

            <a
              href="#"
              className="rounded-full bg-primary-red px-12 py-4 text-sm font-semibold text-white hover:text-primary-red shadow-sm hover:bg-primary-lightred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </section>
      <section className=" w-screen text-center justify-center">
        <div className="py-12 absolute w-full h-screen bg-primary-lightred">
          <h3 className="text-2xl font-bold text-primary-red "> Our Chef</h3>
          <p className="font-light text-center text-primary-red ">
            Nearby, a platter of vibrant, roasted vegetables <br /> awaited
            their turn to delight eager taste buds.
          </p>

          <div className="flex flex-row space-x-4 gap-x-32 justify-center py-10">
            {chefs?.map((e) => (
              <div className="flex flex-col hover:cursor-pointer" key={e?.name}>
                <div className="h-52 w-52 rounded-full inline-block overflow-hidden">
                  <img
                    src={`/${e?.image}`}
                    alt={e?.name}
                    className=" h-full w-full  "
                  />
                </div>
                <span className="font-medium text-2xl text-primary-red uppercase pt-4">
                  {e?.name}
                </span>
                <span className="font-light pt-2 text-primary-red">
                  {e?.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-screen">
          <img
            src={"/background-vector.png"}
            alt="Restaurant Image"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-primary-red w-screen text-center justify-center">
        <div className="w-full h-screen">
          <div className="flex flex-row justify-center py-44 items-center space-x-32">
            <div className="h-96 w-96 bg-white rounded-full inline-block overflow-hidden">
              <img src={`/burger.jpg`} alt="Burger" className="h-full w-full" />
            </div>
            <div className="w-96 text-start">
              <h3 className="font-bold text-5xl">Best Burger</h3>
              <p className="font-light py-12">
                A chef skillfully tossed vibrant vegetables in a sizzling wok,
                sending waves of savory steam into the air. Nearby, a vendor
                offered sweet, golden pastries, their sugary glaze sparkling in
                the afternoon sun
              </p>
              <a
                href="#"
                className="rounded-full bg-primary-lightred px-12 py-4 text-sm font-semibold text-primary-red hover:text-primary-red shadow-sm hover:bg-primary-lightred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-lightred w-screen text-center justify-center ">
        <div className="absolute w-full h-screen">
          <div className="flex flex-row justify-center py-44 items-center space-x-32">
            <div className="w-96 text-start">
              <h3 className="font-bold text-5xl text-primary-red">
                Best Burger
              </h3>
              <p className="font-light py-12 text-primary-red">
                A chef skillfully tossed vibrant vegetables in a sizzling wok,
                sending waves of savory steam into the air. Nearby, a vendor
                offered sweet, golden pastries, their sugary glaze sparkling in
                the afternoon sun
              </p>
              <a
                href="#"
                className="rounded-full bg-primary-red px-12 py-4 text-sm font-semibold text-white hover:text-primary-red shadow-sm hover:bg-primary-lightred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred"
              >
                ORDER NOW
              </a>
            </div>
            <div className="h-96 w-96 bg-white rounded-full inline-block overflow-hidden">
              <img src={`/burger.jpg`} alt="Burger" className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="relative h-screen">
          <img
            src={"/background-turn.png"}
            alt="Restaurant Image"
            className="object-cover "
          />
        </div>
      </section>
      <section className="bg-primary-red w-screen text-center justify-center">
        <div className="w-full h-screen py-32">
          <h3 className="text-5xl font-bold text-primary-lightred py-6">
            {" "}
            Statistics
          </h3>
          <p className="font-light text-center text-primary-lightred">
            Nearby, a platter of vibrant, roasted vegetables <br /> awaited
            their turn to delight eager taste buds.
          </p>

          <div className="flex flex-row space-x-4 gap-x-32 justify-center py-10">
            {statistics?.map((e) => (
              <div className="flex flex-col hover:cursor-pointer" key={e?.name}>
                <div className="h-52 w-52 rounded-full  overflow-hidden border-4 flex flex-col items-center justify-center uppercase">
                  <span className="font-bold text-5xl text-white uppercase pt-4">
                    {e?.value}
                  </span>
                  <span className="font-medium pt-2 text-white">{e?.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary-lightred w-screen text-center justify-center">
        <div className="absolute w-full h-screen py-20">
          <h3 className="text-5xl font-bold text-primary-red py-2">
            {" "}
            Popular Package
          </h3>
          <div className="flex flex-row space-x-4 gap-x-32 justify-center py-16">
            {packages?.map((e) => (
              <div className="flex flex-col hover:cursor-pointer" key={e?.name}>
                <div className="h-96 w-72 rounded-lg  overflow-hidden bg-white flex flex-col justify-start text-center ">
                  <span className="font-bold text-2xl text-primary-red uppercase pt-4">
                    {e?.name}
                  </span>
                  <img
                    src={"/burgerslice.png"}
                    alt="Restaurant Image"
                    className="object-cover w-28 h-28 mx-auto "
                  />
                  <span className="font-semibold text-3xl pt-2 text-primary-red">{`$${e?.value}`}</span>
                  <span className="font-light text-lg pt-2 px-4 text-primary-red">
                    Awaited their turn to delight eager taste buds
                  </span>
                  <a
                    href="#"
                    className="rounded-full bg-primary-red px-6 py-4 mx-6 my-6 text-sm font-semibold text-white hover:text-primary-red shadow-sm hover:bg-primary-lightred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred"
                  >
                    ORDER NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-screen">
          <img
            src={"/background-side.png"}
            alt="Restaurant Image"
            className="object-cover "
          />
        </div>
      </section>
      <section className=" w-screen text-center justify-center">
        <div className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-red-400">
            <div className="absolute  opacity-20">
              <img
                src={"/food_table.jpg"}
                alt="Restaurant Image"
                className="object-cover w-screen h-screen"
              />
            </div>
          </div>
          <div className="relative mx-auto w-1/2 z-10">
            <h3 className="font-medium text-2xl text-white">
              A pot of rich, creamy tomato soup bubbled gently on the stove,
              promising warmth and comfort. Nearby, a platter of vibrant,
              roasted vegetables awaited their turn to delight eager taste buds.
            </h3>
            <h2 className="font-bold text-3xl py-8">Barry Henderson</h2>
          </div>
        </div>
      </section>

      <section className="bg-primary-lightred w-screen text-center justify-center">
        <div className="absolute w-screen h-screen py-20  mx-auto flex justify-center items-center">
          <div className="items-center">

        
          <h3 className="text-5xl font-bold text-primary-red py-2">
            {" "}
            Don't miss our update
          </h3>
          <h2 className="text-primary-red text-lg font-light ">
            Awaited their turn to delight eager taste buds and <br />
            Awaited their turn to delight eager taste buds
          </h2>
          <div className="py-16">
            <input
              type="text"
              name=""
              className="py-3 rounded-l-full w-96 pl-8"
              placeholder="Enter your email"
            />
            <a
              href="#"
              className="rounded-r-full bg-primary-red px-12 py-4 text-sm font-semibold text-white hover:text-primary-red shadow-sm hover:bg-primary-lightred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred"
            >
              ORDER NOW
            </a>
          </div>
          </div>
        </div>
        <div className="relative h-screen">
          <img
            src={"/background-side.png"}
            alt="Restaurant Image"
            className="object-cover "
          />
        </div>
      </section>

      <section className="bg-black w-screen h-screen">
        <div className="flex flex-row"> 
            <div className="text-white">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam, provident iure incidunt maiores voluptatem dolores sequi odit, cum, reiciendis totam debitis eaque repellendus illum commodi alias aliquam natus modi.</p>
            </div>

        </div>
      </section>
    </main>
  );
}
