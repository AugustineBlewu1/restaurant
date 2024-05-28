import React from 'react'
import { navigation } from '../contants'
import Image from 'next/image'

const Header = () => {
  return (
    <section>
        <header className="absolute inset-x-0 top-0 z-10">
          <nav
            className="flex items-center justify-between p-6  lg:p-8 lg:px-32"
            aria-label="Restaurant"
          >
            <h3 className="font-bold text-2xl text-white">Flavor Vault</h3>
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
          <Image 
         
            src={"/background.jpg"}
            alt="Restaurant Image"
            className="absolute inset-0 -z-10 w-screen h-screen object-cover"
            width={0} height={0} sizes={"100vw"} 
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
  )
}

export default Header
