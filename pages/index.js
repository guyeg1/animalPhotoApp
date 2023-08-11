import Header from "./molecules/Header";
import Footer from "./molecules/Footer";
import Link from 'next/link';
import React from "react";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-cats bg-no-repeat bg-cover bg-center">
      <div className='w-full'>
        <Header/>
      </div>
      <div className='flex items-center justify-center mt-64 justify-around'>
        <Link className='underline bg-blue-500 hover:text-2xl border-orange-500 border-2 p-6 text-white text-xl' href="/organisms/Cart">View Saved Pictures</Link>
        <Link className='underline bg-blue-500 hover:text-2xl border-orange-500 border-2 p-6 text-white text-xl' href="/organisms/FactsPage">Open Pictures</Link>
        <Link className='underline bg-blue-500 hover:text-2xl border-orange-500 border-2 p-6 text-white text-xl' href="/organisms/AnimalFacts">Preview Other Animals</Link>
      </div>
      <Footer/>
    </div>
)};
export default HomePage;