import React from 'react'
import { statistics } from '../contants'

const Statistics = () => {
  return (
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
  )
}

export default Statistics
