import React from 'react'
import { packages } from '../contants'
import Image from 'next/image'

const PopularPackage = () => {
  return (
    <section className="bg-primary-lightred w-screen text-center justify-center">
        <div className="relative w-full h-screen py-20">
          <div className="absolute inset-0">
            <Image
              src="/background-side.png"
              alt="Restaurant Background"
              className="object-cover w-full h-full"
              width={0} height={0} sizes={"100vw"}  
            />
          </div>
          <div className="relative z-10 w-full h-full py-20 bg-opacity-75 ">
            <h3 className="text-5xl font-bold text-primary-red py-2 text-center">
              Popular Package
            </h3>
            <div className="flex flex-row space-x-4 gap-x-32 justify-center py-16">
              {packages?.map((e) => (
                <div
                  className="flex flex-col hover:cursor-pointer"
                  key={e?.name}
                >
                  <div className="h-96 w-72 rounded-lg overflow-hidden  flex flex-col justify-start text-center shadow-lg bg-white">
                    <span className="font-bold text-2xl text-primary-red uppercase pt-4 z-10">
                      {e?.name}
                    </span>
                    <div className="flex-grow flex items-center justify-center relative z-0">
                      <div
                        className="w-full h-full bg-no-repeat bg-center bg-contain"
                        style={{ backgroundImage: 'url("/burgerslice.png")' }}
                      ></div>
                    </div>
                    <span className="font-semibold text-3xl pt-2 text-primary-red z-10">{`$${e?.value}`}</span>
                    <span className="font-light text-lg pt-2 px-4 text-primary-red z-10">
                      Awaited their turn to delight eager taste buds
                    </span>
                    <a
                      href="#"
                      className="rounded-full bg-primary-red px-6 py-4 mx-6 my-6 text-sm font-semibold text-white hover:text-primary-red shadow-sm hover:bg-primary-lightred focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred z-10"
                    >
                      ORDER NOW
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default PopularPackage
