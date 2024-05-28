import React from 'react'
import Image from 'next/image'

const Contents = () => {
  return (
    <section className=" w-screen text-center justify-center">
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-red-400">
        <div className="absolute  opacity-20">
          <Image
            src={"/food_table.jpg"}
            alt="Restaurant Image"
            className="object-cover w-screen h-screen"
            width={0} height={0} sizes={"100vw"} 
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
  )
}

export default Contents
