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
          <h4 className="text-white text-start font-bold text-7xl h-auto ">
            Get Cashback <br /> up to 50%
          </h4>
          <p className="text-white font-light py-14">
            The aroma of freshly baked bread mingled with the scent of simmering
            garlic and herbs, filling the cozy kitchen. A pot of rich, creamy
            tomato soup bubbled gently on the stove, promising warmth and
            comfort. Nearby, a platter of vibrant, roasted vegetables awaited
            their turn to delight eager taste buds.
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
          <div  className="h-96 w-96 bg-white rounded-full inline-block overflow-hidden">
            <img src={`/burger.jpg`} alt="Burger" className="h-full w-full" />
          </div>
          <div className="w-80 text-start">
            <h3 className="font-bold text-5xl">Best Burger</h3>
            <p className="font-light py-12">A chef skillfully tossed vibrant vegetables in a sizzling wok, sending waves of savory steam into the air. Nearby, a vendor offered sweet, golden pastries, their sugary glaze sparkling in the afternoon sun</p>
          </div>
          </div>
         
        </div>
      </section>
    </main>
  );
}
