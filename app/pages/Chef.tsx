import React from 'react'
import { chefs } from '../contants'

const Chef = () => {
  return (
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
  )
}

export default Chef
