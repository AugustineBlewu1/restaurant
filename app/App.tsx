"use client";

import Header from "./pages/Header";
import Chef from "./pages/Chef";
import BurgerFirst from "./pages/BurgerFirst";
import BurgerSecond from "./pages/BurgerSecond";
import Statistics from "./pages/Statistics";
import PopularPackage from "./pages/PopularPackage";
import Contents from "./pages/Content";
import Subscribe from "./pages/Subscribe";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Chef />

      <BurgerFirst />
      <BurgerSecond />
      <Statistics />
      <PopularPackage />
      <Contents />

      <Subscribe />

      <Footer />
    </main>
  );
}
