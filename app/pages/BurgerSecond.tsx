import React from 'react'
import Image from 'next/image'

const BurgerSecond = () => {
  return (
    <section className="bg-primary-lightred w-screen text-center justify-center ">
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 flex flex-row justify-center py-44 items-center space-x-32 z-10">
            <div className="w-96 text-start">
              <h3 className="font-bold text-5xl text-primary-red">
                Best Burger
              </h3>
              <p className="font-light py-12 text-primary-red">
                A chef skillfully tossed vibrant vegetables in a sizzling wok,
                sending waves of savory steam into the air. Nearby, a vendor
                offered sweet, golden pastries, their sugary glaze sparkling in
                the afternoon sun.
              </p>
              <a
                href="#"
                className="rounded-full py-4 px-12 bg-primary-red hover:cursor-pointer"
              >
                ORDER NOW
              </a>
            </div>
            <div className="h-96 w-96 bg-white rounded-full inline-block overflow-hidden">
              <Image src={`/burger.jpg`} alt="Burger" className="h-full w-full" width={0} height={0} sizes={"100vw"}  />
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <Image
              src={"/background-turn.png"}
              alt="Restaurant Image"
              className="object-cover w-full h-full"
              width={0} height={0} sizes={"100vw"} 
            />
          </div>
        </div>
      </section>
  )
}

export default BurgerSecond
