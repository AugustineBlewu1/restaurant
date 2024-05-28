import React from 'react'
import Image from 'next/image'

const Subscribe = () => {
  return (
    <section className="bg-primary-lightred w-screen text-center justify-center">
    <div className="relative w-full  h-screen py-20 ">
      <div className="absolute inset-0">
        <Image
          src={"/background-side.png"}
          alt="Restaurant Image"
          className="object-cover"
          width={0} height={0} sizes={"100vw"} 
        />
      </div>
      <div className="relative z-10 w-screen mx-auto h-full flex justify-center items-center">
        <div className="items-center">
          <h3 className="text-5xl font-bold text-primary-red py-2">
            {"Don't miss our update "}
       
          </h3>
          <h2 className="text-primary-red text-lg font-light">
            Awaited their turn to delight eager taste buds and <br />
            Awaited their turn to delight eager taste buds
          </h2>
          <div className="py-16">
            <input
              type="text"
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
      </div>
    </section>
  )
}

export default Subscribe
