import React from 'react'
import { socialIcons } from '../contants'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="bg-black w-screen h-screen">
    <div className="flex flex-row justify-center mx-auto h-screen items-center gap-28">
      <div className="text-white text-start w-1/3  ">
        <h2 className="font-bold text-2xl ">Flavor Vault</h2>
        <p className="pt-7">
          Juicy, sun-ripened tomatoes burst with flavor in every bite,
          perfect for a summer salad. Aromatic spices blend harmoniously in
          a simmering pot of homemade curry. Golden, crispy bread straight
          from the oven fills the air with its inviting aroma
        </p>
        <span className="flex flex-row space-x-4 pt-7">
          {socialIcons?.map((e, i) => (
            <li className="block hover:cursor-pointer" key={i}>
              {" "}
              <Image src={`/social/${e}`} alt={e}  width={50} height={50} sizes={"100vw"}  />{" "}
            </li>
          ))}
        </span>
      </div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg tracking-normal">About</h2>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            History
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Our Team
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Brand
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Guidelines
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Terms & Conditions
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg tracking-normal">Services</h2>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            How to Order
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Our Product
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Order Status
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Promo
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Payment Status
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg tracking-normal">Other</h2>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Contact Us
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Help
          </a>
          <a
            href=""
            className="font-light hover:cursor-pointer hover:underline"
          >
            Privay
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer
