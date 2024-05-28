import React from 'react'

const BurgerFirst = () => {
  return (
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
            className="rounded-full bg-primary-lightred px-12 py-4 
            text-sm font-semibold text-primary-red hover:text-primary-lightred shadow-sm
             hover:bg-primary-red focus-visible:outline 
             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary-lightred hover:border-2 hover:border-primary-lightred"
          >
            ORDER NOW
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BurgerFirst
